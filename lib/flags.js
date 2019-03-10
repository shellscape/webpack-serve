/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
const chalk = require('chalk');

module.exports = {
  check(valid, flags) {
    const validKeys = Object.keys(valid);
    const userKeys = Object.keys(flags);
    const deprecated = userKeys.filter((key) => !validKeys.includes(key));

    if (deprecated.length) {
      const { error: stderr } = console;
      stderr(chalk`{yellow ˢᵉʳᵛᵉ} Some options were passed which are now deprecated:

  {blue ${deprecated.join('\n  ')}}

  {dim Please run {reset webpack-serve --help} for a list of supported flags.}
`);
    }
  }
}