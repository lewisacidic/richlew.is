module.exports = (baseConfig, env, defaultConfig) => {
  // there is some raw jsx in the gatsby package which requires transpilation
  // so we remove it from the exclude
  defaultConfig.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

  // for some reason, storybook webpack doesn't find the root babel config
  // so we manually include it here
  defaultConfig.module.rules[0].use[0].options = require('../babel.config')

  return defaultConfig
}
