const test = require('ava');

const { setup } = require('./helpers/setup');

test('single compiler', setup('simple', false), async (t, util) => {
  const { page, run } = util;

  await run();
  await page.goto('http://localhost:50000', {
    waitUntil: 'networkidle0'
  });

  const html = await page.evaluate(() => document.body.innerHTML);

  t.snapshot(html);
});
