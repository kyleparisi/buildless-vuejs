/**
 *
 * UTILITIES
 *
 */
window.asyncComp = function(componentName) {
  return function(resolve) {
    require([componentName], resolve);
  };
};

window.randomKey = function(length) {
  return Math.random()
    .toString(36)
    .substr(2, length || 5);
};

requirejs.config({
  baseUrl: "/js",
  paths: {
    lodash: "lodash.min",
    Vue: "https://cdn.jsdelivr.net/npm/vue/dist/vue",
    vue:
      "https://cdn.rawgit.com/edgardleal/require-vuejs/aeaff6db/dist/require-vuejs.min",
    "vue-router": "https://unpkg.com/vue-router/dist/vue-router"
  },
  shim: {
    Vue: { exports: "Vue" }
  }
});

require([
  "Vue",
  "lodash",

  // global components
  "vue!components/app-footer.vue"
], function(Vue, _) {
  window.Vue = Vue;

  // bind lodash to all instances - trust me you'll need it
  Object.defineProperty(Vue.prototype, "_", { value: _ });

  new Vue({
    el: document.getElementsByTagName("footer")[0]
  });
});
