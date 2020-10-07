module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: (config) => {
    ///path absoluto
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
