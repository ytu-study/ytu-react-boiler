const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  root: true,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["import", "simple-import-sort", "react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2021,
  },
  rules: {
    eqeqeq: ["warn", "always", { null: "never" }],
    "no-debugger": ["error"],
    "no-empty": ["warn", { allowEmptyCatch: true }],
    "no-process-exit": "off",
    "no-useless-escape": "off",
    "prefer-const": [
      "warn",
      {
        destructuring: "all",
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": [
      "error",
      { allowArgumentsExplicitlyTypedAsAny: true },
    ],
    "@typescript-eslint/no-empty-function": [
      "error",
      { allow: ["arrowFunctions"] },
    ],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
    "import/no-duplicates": "error",
    "import/order": "error",
  },
});
