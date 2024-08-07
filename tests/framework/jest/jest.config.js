const fs = require('fs');
const path = require('path');
const { defaults: tsjPreset } = require('ts-jest/presets');

const PROJECT_ROOT = path.resolve(__dirname, '../../../');
if (!fs.existsSync(path.join(PROJECT_ROOT, 'package.json'))) {
  throw new Error('PROJECT_ROOT does not appear to be the project root.');
}

const SRC_ROOT = path.resolve(PROJECT_ROOT, 'src');
const LIB_ROOT = path.resolve(PROJECT_ROOT, 'lib');


module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/tests/framework/jest/ImageStub',
    '\\.png$': '<rootDir>/tests/framework/jest/ImageStub',
    '\\.gif$': '<rootDir>/tests/framework/jest/ImageStub',
    '\\.css$': '<rootDir>/tests/framework/jest/StyleStub',
    '\\.module\\.scss$': 'identity-obj-proxy', // Must appear before .scss to match first
    '\\.scss$': '<rootDir>/tests/framework/jest/StyleStub',
    '\\.woff$': '<rootDir>/tests/framework/jest/StyleStub',
    '^hls.js': '<rootDir>/tests/framework/jest/mocked-modules/hls.js',
  },
  modulePaths: [SRC_ROOT, LIB_ROOT],
  rootDir: PROJECT_ROOT,
  setupFilesAfterEnv: [
    '<rootDir>/tests/framework/jest/test-setup.js',
  ],
  setupFiles: ['<rootDir>/tests/framework/jest/jest.polyfills.js'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.unit.ts?(x)'],
  transform: {
    ...tsjPreset.transform,
    '^.+\\.jsx?$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: path.resolve(PROJECT_ROOT, 'tsconfig.jest.json'),
      isolatedModules: true,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{js,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.tsx',
  ],
  cacheDirectory: '<rootDir>/.cache/unit'
};
