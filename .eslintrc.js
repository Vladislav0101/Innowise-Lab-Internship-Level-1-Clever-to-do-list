module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "prettier",
    "plugin:prettier/recommended",
    "plugin:vue/recommended",
    "prettier/vue"
  ],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
