const { join } = require('path');

const execa = require('execa');
const getPort = require('get-port');
const puppeteer = require('puppeteer');
const strip = require('strip-ansi');

const binPath = join(__dirname, '../../bin/webpack-serve');

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
  const fixturePath = join(__dirname, '../fixtures', fixture);

  const util = {
    page,
    run: (...flags) => {
      const { stderr } = execa('node', [binPath, `--port=${port}`].concat(flags), {
        cwd: fixturePath
      });
      // stderr.on('data', (d) => log(d.toString()));
      return waitForBuild(stderr);
    },
    url
  };
  try {
    await run(t, util);
  } finally {
    await page.close();
    await instance.close();
  }
};

module.exports = { setup };
