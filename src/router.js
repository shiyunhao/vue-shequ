import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Topic from "./components/Topic.vue";
import User from "./components/User.vue";
import UserList from "./components/UserList.vue";
import AddArticle from "./components/AddArticle.vue";
import Messages from "./components/Messages.vue";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/topics/:id",
      component: Topic
    },
    {
      path: "/user/:loginname",
      component: User
    },
    {
      path: "/user/:loginname/topics",
      component: UserList
    },
    {
      path: "/topic/create",
      component: AddArticle
    },
    {
      path: "/my/messages",
      component: Messages
    }
  ],
  mode: "history"
});
