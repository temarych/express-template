import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      indent: ['error', 2],
      semi: ['error', 'always'],
      'eol-last': ['error', 'always'],
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      'import/order': [
        'error',
        { groups: ['builtin', 'external', 'internal', 'parent', 'sibling'] },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: 'tsconfig.json',
        },
      },
    },
  },
  eslintConfigPrettier,
);
