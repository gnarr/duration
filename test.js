// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'test';

// Makes the script crash on unhandled rejections instead of silently
process.on('unhandledRejection', err => {
  throw err;
});

const jest = require('jest');
const argv = process.argv.slice(2);

// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch');
}

jest.run(argv);
