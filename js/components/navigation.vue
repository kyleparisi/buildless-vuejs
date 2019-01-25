<template>
    <div class="w-third-ns dt w-100 center tc">
        <div class="dtc">
            <router-link to="/" class="link dtc pointer dim">Page 1</router-link>
        </div>
        <div class="dtc">
            <router-link to="/double" class="link dtc pointer dim">Page 2</router-link>
        </div>
    </div>
</template>

<script>
  define(["Vue"], function(Vue) {
    return Vue.component("navigation", {
      template,
      data() {
        return window.data;
      }
    });
  });
</script>
