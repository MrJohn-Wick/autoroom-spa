module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'react', 'jsx-a11y'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],

  rules: {
    // import
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'unknown', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@yme/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '(!@yme/**)',
            group: 'unknown',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'no-restricted-imports': [
      'warn',
      {
        paths: [
          // https://www.npmjs.com/package/babel-plugin-lodash
          {
            name: 'lodash',
            message: 'Please import from lodash/some_module',
          },
        ],
      },
    ],
    'import/newline-after-import': ['error'],
    'import/no-duplicates': ['error'],

    // object aligning
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 1,
        },
      },
    ],
    'object-property-newline': ['error'],

    // react
    'react-hooks/rules-of-hooks': ['error'],
    'react-hooks/exhaustive-deps': ['error'],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
      },
    ],
    'react/display-name': ['warn'],
    'react/jsx-no-bind': ['warn'],
    'react/jsx-key': ['warn'],

    // ts
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-empty-function': ['warn'],
    '@typescript-eslint/ban-ts-comment': ['warn'],
    '@typescript-eslint/no-explicit-any': ['warn'],
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['interface', 'typeAlias'],
        format: ['PascalCase'],
        custom: {
          regex: '^[IT][A-Z]',
          match: false,
        },
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'separate-type-imports',
      },
    ],

    // a11y
    'jsx-a11y/click-events-have-key-events': ['warn'],
    'jsx-a11y/no-noninteractive-element-interactions': ['warn'],
    'jsx-a11y/label-has-associated-control': ['warn'],
    'jsx-a11y/alt-text': ['warn'],
    'jsx-a11y/anchor-is-valid': ['warn'],

    // other
    'newline-before-return': ['error'],
    'no-console': 'warn',
    'no-useless-rename': ['error'],
    'object-shorthand': ['error'],
  },

  settings: {
    'import/internal-regex': '^@',
  },
};
