// @flow
import { t } from 'testcafe';

fixture('google').page('www.google.com');

test('example', async () => {
  await t.expect(true).ok();
});
