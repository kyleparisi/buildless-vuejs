<template>
    <div class="pt2">
        <span v-if="!loading">{{ stuff }}</span> - page 2 - <subpages-button></subpages-button>
    </div>
</template>

<script>
  define(["Vue"], function(Vue) {
    return Vue.component("page", {
      template,
      data() {
        return window.data;
      }
    });
  });
</script>
