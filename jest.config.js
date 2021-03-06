'use strict';

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  globals: {
    'ts-jest': {
      tsConfig: {
        esModuleInterop: true
      }
    }
  },
  collectCoverage: process.env.CI === 'true',
  collectCoverageFrom: [
    'packages/*/src/**/*.{js,jsx,ts,tsx}'
  ],
  restoreMocks: true,
  moduleNameMapper: {
    '^react-data-grid$': '<rootDir>/packages/react-data-grid/src/',
    '^react-data-grid-addons$': '<rootDir>/packages/react-data-grid-addons/src/',
    '\\.css$': '<rootDir>/test/fileMock.js'
  },
  setupFiles: [
    '<rootDir>/test/setupTests.js'
  ],
  setupFilesAfterEnv: [
    'react-testing-library/cleanup-after-each'
  ],
  testMatch: [
    '<rootDir>/packages/*/src/**/*.spec.(js|ts|tsx)',
    '<rootDir>/examples/**/*.spec.(js|ts|tsx)',
    '<rootDir>/tests/**/*.test.(ts|tsx)'
  ]
};
