const ERROR = 2;
const WARNING = 1;
const SEVERITY = process.argv.includes('no-errors') ? WARNING : ERROR;

const config = {
  'parser': 'babel-eslint',
  'plugins': [
    'react',
  ],
  'settings': {
    'react': {
      'version': '16.8.6',
    },
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'env': {
    'browser': true,
    'amd': true,
    'es6': true,
    'node': true,
    'jest': true,
  },
  'rules': {
    'no-duplicate-imports': SEVERITY,
    'comma-dangle': [SEVERITY, {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
    }],
    'curly': SEVERITY,
    'quotes': [ SEVERITY, 'single' ],
    'semi': [SEVERITY, 'always'],
    'no-undef': SEVERITY,
    'spaced-comment': SEVERITY,
    'global-strict': 0,
    'keyword-spacing': [SEVERITY, { 'before': true }],
    'no-extra-semi': SEVERITY,
    'no-underscore-dangle': 0,
    'no-console': SEVERITY,
    'no-unused-vars': [SEVERITY, { 'ignoreRestSiblings': true }],
    'no-trailing-spaces': [SEVERITY, { 'skipBlankLines': true }],
    'space-infix-ops': SEVERITY,
    'no-multi-spaces': SEVERITY,
    'no-unreachable': SEVERITY,
    'no-else-return': SEVERITY,
    'no-alert': 0,
    'no-nested-ternary': SEVERITY,
    'no-case-declarations': SEVERITY,
    'jsx-quotes': SEVERITY,
    'react/jsx-boolean-value': SEVERITY,
    'object-shorthand': [SEVERITY, 'always', { 'avoidQuotes': true }],
    'react/jsx-uses-react': SEVERITY,
    'react/jsx-uses-vars': SEVERITY,
    'react/react-in-jsx-scope': SEVERITY,
    'react/jsx-no-duplicate-props': SEVERITY,
    'react/no-deprecated': 1,
    'react/no-string-refs': SEVERITY,
    'react/no-typos': SEVERITY,
    'react/no-direct-mutation-state': SEVERITY,
    'react/default-props-match-prop-types': SEVERITY,
    'react/no-is-mounted': SEVERITY,
    'react/no-unknown-property': SEVERITY,
    'react/no-render-return-value': SEVERITY,
    'react/jsx-closing-bracket-location': SEVERITY,
    'react/jsx-curly-spacing': SEVERITY,
    'react/jsx-equals-spacing': SEVERITY,
    'react/jsx-first-prop-new-line': [SEVERITY, 'multiline-multiprop'],
    'react/jsx-wrap-multilines': [SEVERITY, {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line',
    }],
    'react/jsx-max-props-per-line': [SEVERITY, { 'maximum': 2 }],
    'react/jsx-indent-props': [SEVERITY, 2],
    'react/jsx-no-comment-textnodes': SEVERITY,
    'react/jsx-pascal-case': SEVERITY,
    'react/jsx-tag-spacing': [SEVERITY, {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
    }],
    'react/no-multi-comp': [SEVERITY, { 'ignoreStateless': true }],
    'react/self-closing-comp': [SEVERITY, {
      'component': true,
      'html': false,
    }],
    'react/jsx-no-undef': SEVERITY,
    'react/prefer-stateless-function': 1,
  },
};

module.exports = config;