module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  globals: {
    expect: true,
    describe: true,
    it: true
  },
  rules: {
    semi: [2, 'always']
  }
};
