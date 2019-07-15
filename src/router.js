import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Topic from "./components/Topic.vue";
import User from "./components/User.vue";
import AddArticle from "./components/AddArticle.vue";
import Messages from "./components/Messages.vue";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    // {
    //   path: "/",
    //   redirect: "/vue-shequ/"
    // },
    {
      path: "/vue-shequ/",
      component: Home
    },
    {
      path: "/vue-shequ/topics/:id",
      component: Topic
    },
    {
      path: "/vue-shequ/user/:loginname",
      component: User
    },
    {
      path: "/vue-shequ/topic/create",
      component: AddArticle
    },
    {
      path: "/vue-shequ/my/messages",
      component: Messages
    }
  ],
  mode: "history"
});
