import eslintConfigPrettier from 'eslint-config-prettier';
import eslintImport from "eslint-plugin-import";
import typeScriptESLintParser from '@typescript-eslint/parser';
import solid from 'eslint-plugin-solid';
import typeScriptESLint from '@typescript-eslint/eslint-plugin';

export default [
  {
    plugins: {
      eslintImport,
    },
    rules: {
      "eslintImport/default": "error",
    },
  },
  {
    rules: {
      semi: ["error", "always"],
    },
  },
  {
    plugins: {
      typeScriptESLint,
      solid,
    },
    files: ["/**/*.*"],
    languageOptions: {
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
      },
      parser: typeScriptESLintParser,
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      },
      useJSXTextNode: true,
      project: true,
    },
  },
  eslintConfigPrettier,
];
