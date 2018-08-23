module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
    sourceType: 'module'
    },
    env: {
    browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
    'html'
    ],
    // add your custom rules here
    'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    //禁止直接使用 Object.prototypes 的内置属性
    "no-prototype-builtins":0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 强制使用有效的 JSDoc 注释
    "valid-jsdoc": 1,
    "space-before-function-paren": 0,
    "no-inner-declarations":0,
    "no-extend-native":0// 可以使用扩展方法
    }
    }
    
   