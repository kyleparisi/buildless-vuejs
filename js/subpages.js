require([
  "Vue",
  "Api",
  "vue-router",

  // page components
  "vue!components/subpages/button.vue",

  // generic components
  "vue!components/navigation.vue"
], function(Vue, Api, VueRouter) {
  Vue.use(VueRouter);
  let router;

  const checkRouteStillMatches = function(to) {
    return function(data) {
      if (router.history.current.path !== to) {
        return false;
      }
      window.data.stuff = data;
      window.data.loading = false;
    };
  };

  const error_checkRouteStillMatches = function(to) {
    return function(error) {
      // log error regardless if the page has changed.
      console.log(error);
      if (router.history.current.path !== to) {
        return false;
      }
      window.data.loading = false;
      window.data.systemError = error.message ? error.message : error;
    };
  };

  window.refreshStuff = function() {
    const path = "/";
    window.data.loading = true;
    Api.getStuff()
      .then(checkRouteStillMatches(path))
      .catch(error_checkRouteStillMatches(path));
  };

  window.refreshDoubleStuff = function() {
    const path = "/double";
    window.data.loading = true;
    Api.getDoubleStuff()
      .then(checkRouteStillMatches(path))
      .catch(error_checkRouteStillMatches(path));
  };

  router = new VueRouter({
    routes: [
      {
        path: "/",
        component: asyncComp("vue!pages/subpages/page1.vue"),
        beforeEnter: (to, from, next) => {
          window.refreshStuff();
          next();
        }
      },
      {
        path: "/double",
        component: asyncComp("vue!pages/subpages/page2.vue"),
        beforeEnter: (to, from, next) => {
          window.refreshDoubleStuff();
          next();
        }
      }
    ]
  });

  new Vue({
    el: "#nav",
    router: router,
    data: window.data
  });

  new Vue({
    data: window.data,
    router: router,
    el: "#pages"
  });

  if (!navigator.onLine) {
    window.data.systemError = "You are offline.";
  }
});
