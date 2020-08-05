module.exports = {
  env: {
    "browser": true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  plugins: [
    "@typescript-eslint",
    "deprecation"
  ],
  rules: {
    "deprecation/deprecation": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error"
  }
}