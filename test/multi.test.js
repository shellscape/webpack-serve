const { join } = require('path');

const test = require('ava');

const { setup } = require('./helpers/setup');

test('multi compiler', setup('multi'), async (t, util) => {
  const { destPath, page, replace, run, url } = util;

  await run('--all');
  await page.goto(url, {
    waitUntil: 'networkidle0'
  });

  const componentPath = join(destPath, 'component.js');
  const workerPath = join(destPath, 'work.js');
  const componentContent = `const main = document.querySelector('main'); main.innerHTML = 'test';`;
  const workerContent = `const worker = document.querySelector('#worker'); worker.innerHTML = 'test';`;

  await replace(componentPath, componentContent);
  await replace(workerPath, workerContent);

  console.log(await page.evaluate(() => document.body.innerHTML));

  const componentValue = await page.evaluate(() => document.querySelector('main').innerHTML);
  const workValue = await page.evaluate(() => document.querySelector('#worker').innerHTML);

  t.is(componentValue, 'test');
  t.is(workValue, 'test');
});
