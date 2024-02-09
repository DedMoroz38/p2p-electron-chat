module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-alert': 'warn',
    'no-console': 'warn',
    'linebreak-style': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      },
      { usePrettierrc: true }
    ],
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase']
      }
    ]
  }
}
