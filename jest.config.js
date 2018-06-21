module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json'
    }
  },
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js'
  },
  testMatch: [
    '**/__tests__/**/*.(ts|js)',
    '**/src/**/?(*.)(spec|test).(ts|js)'
  ],
  testEnvironment: 'node'
};
