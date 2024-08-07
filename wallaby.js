module.exports = function (w) {
  return {
    //files: [
    //  'src/**/*.{ts,tsx,js,jsx}',
    //  { pattern: 'src/**/*.unit.*', ignore: true },
    //  { pattern: 'src/**/*.d.ts', ignore: true },
    //],
    //files: [{ pattern: 'src/**/*.unit.*', ignore: true }],
    tests: ['src/**/*.unit.ts?(x)'],
    //trace: true,
    testFramework: 'jest',
    autoDetect: ['jest'],
    //compilers: {
    //  '**/*.{ts,tsx}': w.compilers.typeScript({
    //    esModuleInterop: true,
    //  }),
    //},

    setup(wallaby) {
      const jestConfig = require('./tests/framework/jest/jest.config.js');
      //jestConfig.transform = undefined;
      //jestConfig.cache = false;
      //console.log(jestConfig.transform);
      wallaby.testFramework.configure(jestConfig);
    },
  };
};
