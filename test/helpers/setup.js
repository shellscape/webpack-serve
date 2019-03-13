const { writeFileSync } = require('fs');
const { join } = require('path');

const copy = require('cpy');
const del = require('del');
const execa = require('execa');
const getPort = require('get-port');
const mkdir = require('make-dir');
const puppeteer = require('puppeteer');
const strip = require('strip-ansi');

const binPath = join(__dirname, '../../bin/webpack-serve');

const { log } = console;

const replace = (path, content) => {
  return {
    then(r) {
      log('replacing:', path);
      writeFileSync(path, content);
      setTimeout(r, 5000);
    }
  };
};

const waitForBuild = (stderr) => {
  return {
    then(r) {
      stderr.on('data', (data) => {
        const content = strip(data.toString());
        if (/webpack: Hash:/.test(content)) {
          r();
        }
      });
    }
  };
};

const setup = (fixture) => async (t, run) => {
  const instance = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await instance.newPage();
  const port = await getPort({ port: Math.floor(Math.random() * (55600 - 55555) + 55555) });
  const url = `http://localhost:${port}`;
  const srcPath = join(__dirname, '../fixtures', fixture);
  const tempName = t.title.replace(/\s/g, '-');
  const destPath = await mkdir(join(srcPath, `temp-${tempName}`));

  log('copying:', srcPath, 'to', destPath);
  await copy(`${srcPath}/*`, destPath);

  const util = {
    destPath,
    page,
    replace,
    run: (...flags) => {
      const { stderr } = execa('node', [binPath, `--port=${port}`].concat(flags), {
        cwd: destPath
      });
      // stderr.on('data', (d) => log(d.toString()));
      return waitForBuild(stderr);
    },
    url
  };
  try {
    await run(t, util);
  } finally {
    await del(destPath);
    await page.close();
    await instance.close();
  }
};

module.exports = { setup };
