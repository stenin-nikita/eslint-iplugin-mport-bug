module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'plugin:@typescript-eslint/base',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'import/no-cycle': 'error',
  },
};
