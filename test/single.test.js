const { join } = require('path');

const test = require('ava');

const { setup } = require('./helpers/setup');

test('single compiler', setup('simple'), async (t, util) => {
  const { destPath, page, replace, run, url } = util;

  await run();
  await page.goto(url, {
    waitUntil: 'networkidle0'
  });

  const componentPath = join(destPath, 'component.js');
  const content = `const main = document.querySelector('main'); main.innerHTML = 'test';`;

  await replace(componentPath, content);

  console.log(await page.evaluate(() => document.body.innerHTML));

  const value = await page.evaluate(() => document.querySelector('main').innerHTML);

  t.is(value, 'test');
});
