module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.VUE_APP_NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.VUE_APP_NODE_ENV === 'production' ? 'error' : 'off',
  }
}
