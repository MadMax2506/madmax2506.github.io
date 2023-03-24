module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"]
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    eqeqeq: 2,
    "import/prefer-default-export": 0,
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    'prettier/prettier': 2,
  },
  "overrides": [
    {
      "files": [
        "*.tsx",
        "*.ts"
      ],
      "rules": {
        "import/no-anonymous-default-export": "off",
      }
    }]
};
