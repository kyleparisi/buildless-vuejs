<template>
    <button>Hello</button>
</template>

<script>
  define(["Vue"], function(Vue) {
    Vue.component("subpages-button", {
      template,
      data() {
        return window.data;
      }
    })
  });
</script>