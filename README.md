# eslint-config-tjw-vue

The Jared Wilcurt's Vue.js ESLint rules


## Using this

This assumes you have ESLint already set up, if not, refer to [this guide](https://github.com/tjw-lint/eslint-config-tjw-base).

1. `npm install --save-dev eslint@9 eslint-plugin-vue eslint-config-tjw-vue`
1. In your `eslint.config.js`:
    ```js
    import tjwVue from 'eslint-config-tjw-vue';
    import pluginVue from 'eslint-plugin-vue';

    const vue2Recommended = pluginVue.configs['flat/vue2-recommended'];
    const vue3Recommended = pluginVue.configs['flat/recommended'];

    export default [
      // Generic rulesets first, such as:

      // js.configs.recommended,
      // tjwBase,

      // Then pick either Vue 2 or Vue 3 from above and spread it
      ...vue3Recommended,
      tjwVue,

      // Then project specific settings
      {
      }
    ]
    ```


* * *


**See also:**

* [eslint-config-tjw-base](https://github.com/tjw-lint/eslint-config-tjw-base)
* [eslint-config-tjw-import](https://github.com/tjw-lint/eslint-config-tjw-import)
* [eslint-config-tjw-jest](https://github.com/tjw-lint/eslint-config-tjw-jest)
* [eslint-config-tjw-jsdoc](https://github.com/tjw-lint/eslint-config-tjw-jsdoc)
* [eslint-config-tjw-vue](https://github.com/tjw-lint/eslint-config-tjw-vue)
