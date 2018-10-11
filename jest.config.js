module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testRegex: '^.+/src/.+\\.spec\\.js$',
  testPathIgnorePatterns: ['node_modules', '.cache'],
  moduleFileExtensions: ['js'],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  setupFiles: ['<rootDir>/gatsby-shim.js'],
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
    'typeface-*': '<rootDir>/__mocks__/file-mock.js'
  },
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        outputPath: 'reports/html/unit-tests.html',
        theme: 'lightTheme'
      }
    ],
    [
      'jest-junit',
      {
        output: 'reports/junit/unit-tests.xml'
      }
    ]
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['text', 'html'],
  coverageDirectory: 'reports/coverage'
}