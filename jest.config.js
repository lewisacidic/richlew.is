module.exports = {
  preset: 'jest-puppeteer', // needs to be at a global configuration level
  projects: ['jest.e2e.config.js', 'jest.unit.config.js', 'jest.lint.config.js']
}
