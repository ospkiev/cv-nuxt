module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  plugins: [
    'vue',
    'html',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'no-undef': 'off',
    'no-shadow': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state', 'app', 'context', 'event', 'e', 'config', '$axios', '$i18n'] }],
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'vue/no-v-html': 'off',
    'max-len': 'off',
  },
}
