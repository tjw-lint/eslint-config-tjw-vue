// Vue Linter Options
module.exports = {
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 8,
    'sourceType': 'module'
  },
  'env': {
    'browser': true,
    'node': true
  },
  'plugins': [
    'vue'
  ],
  'extends': [
    'plugin:vue/recommended'
  ],
  'rules': {
    'vue/attribute-hyphenation': [
      'error',
      'never'
    ],
    'vue/attributes-order': [
      'error',
      {
        'order': [
          // 'v-for item in items'
          'LIST_RENDERING',

          // 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
          'CONDITIONALS',

          // 'v-once', 'v-pre'
          'RENDER_MODIFIERS',

          // 'v-text', 'v-html'
          'CONTENT',

          // 'v-model', 'v-bind', ':property="foo"'
          'BINDING',

          // 'is'
          'DEFINITION',

          // 'id'
          'GLOBAL',

          // 'customProp="foo"', 'class', 'type', 'value' etc
          'OTHER_ATTR',

          // '@click="functionCall"', 'v-on="event"'
          'EVENTS',

          // 'slot', 'key', 'ref'
          'UNIQUE'
        ]
      }
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        'singleline': 'never',
        'multiline': 'always'
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        'startTag': 'never',
        'endTag': 'never',
        'selfClosingTag': 'always'
      }
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        'attribute': 1,
        'closeBracket': 0
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        'html': {
          'void': 'always',
          'normal': 'never',
          'component': 'always'
        }
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        'singleline': 3,
        'multiline': {
          'max': 1,
          'allowFirstLine': false
        }
      }
    ],
    'vue/name-property-casing': [
      'error',
      'PascalCase'
    ],
    'vue/order-in-components': [
      'error',
      {
        'order': [
          'el',
          'name',
          [
            'template',
            'render'
          ],
          'parent',
          'functional',
          [
            'delimiters',
            'comments'
          ],
          [
            'components',
            'directives'
          ],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          [
            'props',
            'propsData'
          ],
          'data',
          'methods',
          'computed',
          'filters',
          'watch',
          'LIFECYCLE_HOOKS',
          'renderError'
        ]
      }
    ],
    'vue/prop-name-casing': [
      'error',
      'camelCase'
    ]
  }
};
