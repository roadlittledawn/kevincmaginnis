module.exports = {
  extends: [
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
  ],
  plugins: ["react", "jsx-a11y", "graphql"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    files: ["*.js", "*.jsx"],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    test: "readonly",
    expect: "readonly",
  },
  rules: {
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: false,
      },
    ],
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^React",
        args: "after-used",
        argsIgnorePattern: "^React",
        ignoreRestSiblings: false,
      },
    ],
    "react/display-name": "off",
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "jsx-a11y/no-onchange": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-control-regex": 0,
  },
};
