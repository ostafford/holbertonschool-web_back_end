import eslint from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**', 'babel.config.js'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
  }
];