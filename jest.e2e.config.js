module.exports = {
  displayName: 'e2e',
  preset: 'jest-puppeteer',
  testMatch: ['<rootDir>/src/e2e/**/*.js'],
  setupTestFrameworkScriptFile: '<rootDir>/jest.e2e.setup.js'
}
