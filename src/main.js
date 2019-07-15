import Vue from "vue";
import App from "./App.vue";
import "./assets/glocal.css";
import router from "./router";
import "./assets/icon/iconfont.css";
import { Button, Pagination } from "element-ui";
// import link from "./link";

Vue.config.productionTip = false;
Vue.use(Pagination);
Vue.use(Button);
// Vue.use(link);
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
