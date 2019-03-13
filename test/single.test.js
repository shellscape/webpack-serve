const test = require('ava');

const { setup } = require('./helpers/setup');

test('single compiler', setup('simple'), async (t, util) => {
  const { page, run, url } = util;

  await run();
  await page.goto(url, {
    waitUntil: 'networkidle0'
  });

  const html = await page.evaluate(() => document.body.innerHTML);

  t.snapshot(html);
});
