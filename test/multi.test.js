const test = require('ava');

const { setup } = require('./helpers/setup');

test('multi compiler', setup('multi'), async (t, util) => {
  const { page, run, url } = util;

  await run('--all');
  await page.goto(url, {
    waitUntil: 'networkidle0'
  });

  const html = await page.evaluate(() => document.body.innerHTML);

  t.snapshot(html);
});
