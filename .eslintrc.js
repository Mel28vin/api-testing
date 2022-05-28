module.exports = {
  extends: ["airbnb", "airbnb/hooks", "plugin:import/errors", "prettier"],
  plugins: ["prettier"],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "import/extensions": ["error"],
    "consistent-return": "off",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "prettier/prettier": "warn",
    "no-console": "off",
    "no-unused-vars": "off",
  },
  globals: {
    datalayer: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  // semi: ["error", "never"],
}
