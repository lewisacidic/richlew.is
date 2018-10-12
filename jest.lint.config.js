module.exports = {
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  testMatch: ['<rootDir>/src/**/*.js'],
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
