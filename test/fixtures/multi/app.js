require('./component');

const { error } = console;

if (module.hot) {
  module.hot.accept((err) => {
    if (err) {
      error('HMR', err);
    }
  });
}

// uncomment to produce a build error
// if (!window) {
//   require('tests');
// }

// uncomment to produce a build warning
// console.log(require);
