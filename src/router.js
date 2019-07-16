import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Topic from "./components/Topic.vue";
import User from "./components/User.vue";
import AddArticle from "./components/AddArticle.vue";
import Messages from "./components/Messages.vue";
import PUBLICURL from "./link";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: PUBLICURL,
      component: Home
    },
    {
      path: `${PUBLICURL}/topics/:id`,
      component: Topic
    },
    {
      path: `${PUBLICURL}/user/:loginname`,
      component: User
    },
    {
      path: `${PUBLICURL}/topic/create`,
      component: AddArticle
    },
    {
      path: `${PUBLICURL}/my/messages`,
      component: Messages
    }
  ],
  mode: "history"
});
