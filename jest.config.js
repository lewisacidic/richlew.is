module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testRegex: '^.+/src/.+\\.spec\\.js$',
  testPathIgnorePatterns: ['node_modules', '.cache'],
  moduleFileExtensions: ['js'],
  testURL: 'http://localhost'
}
