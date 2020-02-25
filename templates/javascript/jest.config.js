module.exports = {
  setupFilesAfterEnv: ['<rootDir>/config/testing/setupTests.js'],
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.jsx', '!src/App.jsx'],
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
  },
  // individual test will be reported
  verbose: true,
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'node', 'json'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/testing/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$':
      '<rootDir>/config/testing/__mocks__/styleMock.js',
    // '<rootDir>/src/services/i18n.ts':
    // 	'<rootDir>/config/testing/__mocks__/i18nMock.tsx',
  },
  // Where Jest detectes test files
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx}',
  ],
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: [`<rootDir>/loadershim.js`],
  // configure minimum threshold enforcement for coverage results
  // https://jestjs.io/docs/en/configuration#coveragethreshold-object
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
}
