export default {
  rules: {
    // myProp="prop" data-id="prop" aria-role="button" slot-scope="prop" but not my-prop="prop"
    'vue/attribute-hyphenation': [
      'error',
      'never'
    ],
    // Enforces consistent order of attribute groups
    'vue/attributes-order': [
      'error',
      {
        alphabetical: false,
        order: [
          // 'v-for item in items'
          'LIST_RENDERING',

          // 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
          'CONDITIONALS',

          // 'v-once', 'v-pre'
          'RENDER_MODIFIERS',

          // 'v-text', 'v-html'
          'CONTENT',

          // 'v-model', 'v-bind'
          'TWO_WAY_BINDING',
          // legacy name for TWO_WAY_BINDING
          // 'BINDING',

          // 'v-custom-directive'
          'OTHER_DIRECTIVES',

          // 'is'
          'DEFINITION',

          // 'id'
          'GLOBAL',

          // 'customProp="foo"', 'class', 'type', ':prop="foo"'
          'OTHER_ATTR',

          // '@click="functionCall"', 'v-on="event"'
          'EVENTS',

          // 'slot', 'key', 'ref', 'v-slot'
          'UNIQUE'
        ]
      }
    ],
    // name: 'MyComponent', not name: 'my-component' or name: 'myComponent'
    'vue/component-definition-name-casing': [
      'error',
      'PascalCase'
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        closeBracket: 0
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        }
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/multiline-html-element-content-newline': 'off',
    // Allows usage of v-html without warnings
    'vue/no-v-html': 'off',
    // Enforces a consistent order of sections in Options API and Composition API (no effect on <script setup>)
    'vue/order-in-components': [
      'error',
      {
        order: [
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
          'validations',
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
    'vue/singleline-html-element-content-newline': 'off',
    // showModal="showModal" not ShowModal="showModal" or show-modal="showModal"
    'vue/prop-name-casing': [
      'error',
      'camelCase'
    ]
  }
};
