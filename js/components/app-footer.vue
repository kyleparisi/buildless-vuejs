<template>
    <div class="db dt-l w-100 border-box pa3 ph5-l fw1 o-50 h4">
        <div class="db dtc-l v-mid mid-gray w-100 w-25-l tc tl-l mb2 mb0-l" id="copyright">{{ message }}</div>
        <div class="db dtc-l v-mid w-100 tc tr-l pr3-l gray">
            v1.0.0
        </div>
        <div class="db dtc-l v-mid w-100 w-75-l tc tr-l pointer">
            <a href="/" class="link gray">
                Home
            </a>
        </div>
    </div>
</template>

<script>
  define(["Vue"], function(Vue) {
    Vue.component("app-footer", {
      template,
      data() {
        return {
          message:
            "© Sweet Co " +
            new Date().getFullYear() +
            ". All Rights Reserved."
        };
      }
    });
  });
</script>
