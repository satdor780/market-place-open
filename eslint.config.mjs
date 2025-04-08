import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginReact from 'eslint-plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  {
    plugins: {
      react: eslintPluginReact,
    },
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/*.test.js',
      '**/*.spec.js',
    ],
    rules: {
      // заменяем sort-imports на это:
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // fs, path
            'external', // react, next
            'internal', // @/...
            'parent', // ../
            'sibling', // ./
            'index', // index.ts
            'object', // import * as ...
            'type', // import type { ... }
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
    },
  },
];

export default eslintConfig;
