/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    './.eslintrc-auto-import.json',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",// 关闭ts注释检查
    "@typescript-eslint/no-explicit-any": "off",// 关闭any检查

  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
