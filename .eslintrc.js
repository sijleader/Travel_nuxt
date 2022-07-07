module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-unused-components':'off',
    'vue/no-parsing-error':'off',
    'nuxt/no-globals-in-created':'off',
    "object-shorthand": 0,
    "object-literal-shorthand": 0,
    "property-no-vendor-prefix": 0,
    "value-no-vendor-prefix": 0,
    "stylelint-plugin-stylus/standard":0
  },
}
