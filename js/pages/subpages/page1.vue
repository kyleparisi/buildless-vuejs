<template>
    <div class="pt2">
        <span v-if="!loading">{{ stuff }}</span> - page 1
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
