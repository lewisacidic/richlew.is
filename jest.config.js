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
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
    'typeface-*': '<rootDir>/__mocks__/file-mock.js'
  }
}
