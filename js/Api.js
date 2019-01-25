define(["Auth", "config"/*, "superagent"*/], function(Auth, config/*, superagent*/) {
  const Api = {
    getStuff: () => new Promise(resolve => { setTimeout(() => resolve("stuff"), 100) }),
    getDoubleStuff: () => new Promise(resolve => { setTimeout(() => resolve("double stuff!!"), 100) })
  };
  window.Api = Api;
  return Api;
});
