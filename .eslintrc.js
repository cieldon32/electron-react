module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  ignorePatterns: ['node_modules/', '*.d.ts'],
  rules: {
    'consistent-return': 'warn',
    'max-len': ['warn', 150],
    'object-curly-newline': 'off',
    'global-require': 'warn',
    'no-mixed-operators': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign' : 'off',
    'no-plusplus': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    'no-useless-escape': 'off',
    'default-case': 'off',
    '@typescript-eslint/no-unused-expressions': 'off'
  },
  settings: {
    react: {
      version: '16.13',
    },
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./configs/webpack.config.eslint.js'),
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  }
};
