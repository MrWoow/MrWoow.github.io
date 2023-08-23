module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["airbnb-base", "plugin:vue/vue3-recommended"],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [".eslintrc.{js,cjs}"],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["vue"],
  "rules": {
    "no-var": 2,
    "indent": [2, 2],
    "no-tabs": 1,
    "comma-dangle": [2, "never"],
    "quote-props": [1, "always"],
    "quotes": [1, "double"],
    "no-unused-vars": 0,
    "linebreak-style": 0,

    "vue/multi-word-component-names": [
      2,
      {
        "ignores": ["index"]
      }
    ],
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "implicit-arrow-linebreak": [2, "beside"],
    "import/extensions": 0,
    "vue/first-attribute-linebreak": [
      2,
      {
        "singleline": "beside",
        "multiline": "beside"
      }
    ],
    "vue/html-closing-bracket-newline": [
      1,
      {
        "singleline": "never",
        "multiline": "never"
      }
    ],
    "no-console": 0,
    "max-len": 0,
    "no-restricted-syntax": 0
  }
};
