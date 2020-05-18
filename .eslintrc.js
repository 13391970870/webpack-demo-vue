module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "parser": "babel-eslint",
    "allowImportExportEverywhere": true,
  },
  'rules': {
    'no-var': 'error',
    // 要求或禁止 var 声明中的初始化
    'init-declarations': 2,
    // 强制使用单引号
    'quotes': ['error', 'single'],
    // 要求或禁止使用分号而不是 ASI
    'semi': ['error', 'never'],
    // 禁止不必要的分号
    'linebreak-style': ['error', 'unix'],
    // 空格2个
    'array-bracket-spacing': [2, 'never'],
    // 在块级作用域外访问块内定义的变量是否报错提示
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    // 双峰驼命名格式
    "no-unused-vars": [0, {
      "vars": "all",
      "args": "after-used"
    }],
    //可以声明之后不用
    "import/extensions": 0, //导入js
    "no-console":"off",
    "semi": ["error", "always"]
  },
  "globals": {
    "join": true
  },
};