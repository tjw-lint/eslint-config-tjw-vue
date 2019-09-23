/*

  Because there is no way to prevent @vue/cli-plugin-eslint from installing the incredibly annoying "Yorkie",
  we are forced to neuter it.

  Yorkie is an annoying yapping dog that pisses all over the carpet of your beautiful repos and adds stupid git hooks you didn't fucking asking for.

  Of course, the correct way to handle this would be for yorkie to be an optional dependency, but even that wouldn't be very useful as for this
  *one* repo you would need to do an `npm install --no-optional` where as every other repo in the world just needs `npm install`. What a painfully
  sad state of affairs.

  Worse even, now I'm forced to install yet another dependency just to fix this rabid mutt.

*/


const path = require('path');
const rimraf = require('rimraf');

const hooks = path.join(__dirname, '.git', 'hooks');
rimraf.sync(hooks);
