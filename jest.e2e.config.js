module.exports = {
  displayName: 'e2e',
  preset: 'jest-puppeteer',
  testMatch: ['<rootDir>/src/e2e/**/*.js'],
  setupTestFrameworkScriptFile: '<rootDir>/jest.e2e.setup.js',
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        outputPath: 'reports/html/e2e-tests.html',
        theme: 'lightTheme'
      }
    ],
    [
      'jest-junit',
      {
        output: 'reports/junit/e2e-tests.xml'
      }
    ]
  ]
}
