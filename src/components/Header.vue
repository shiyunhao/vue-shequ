<template>
  <div class="header">
    <div class="inner">
      <div class="logo" @click="$emit('goHome')">
        <h1>vue-js</h1>
      </div>
      <div v-if="!userInfo" class="login">
        <input type="text" v-model="val" />
        <button @click="login">登录</button>
      </div>
      <div v-else class="logout">
        <img :src="userInfo.avatar_url" alt />
        <button @click="logout">退出</button>
      </div>
      <div class="addArticle">
        <span v-if="userInfo&&this.$route.fullPath.indexOf('topic/create')===-1">
          <router-link to="/vue-shequ/topic/create">发布文章</router-link>
        </span>
      </div>
      <div class="header-nav">
        <div class="nav-ul">
          <div class="nav-li">
            <router-link to="/vue-shequ/">首页</router-link>
          </div>
          <div v-if="userInfo" class="nav-li spanInLi">
            <router-link to="/vue-shequ/my/messages">
              <span v-if="messageNum">{{messageNum}}</span>未读消息
            </router-link>
          </div>
          <div class="nav-li">微信公众号</div>
          <div class="nav-li">vue-2.0</div>
          <div class="nav-li">参考资料</div>
          <div class="nav-li">API</div>
          <div class="nav-li">关于</div>
          <div class="nav-li">设置</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 存储登陆状态 一般使用浏览器的本地存储功能  1.cookie 2.localStorage 3.sessionStorage
// local 和 session 的区别，local 直至存储到你不想存了（关闭服务器）  session 关闭窗口 就消失
// 用法  存储  清空  一般存储一些安全信息，不会对后台和用户产生影响的信息，，
// 存储: localStorage.setItem('属性名','属性值')   sessionStorage.setItem('属性名','属性值')
// 清空: localStorage.remove("属性名")删除某个属性    localStorage.clear() 全部清除
// sessionStorage.remove("属性名")删除某个属性   sessionStorage.clear() 全部清除

// 获取 localStorage.getItem('属性名')  sessionStorage.getItem('属性名')
// 存储的顺序应不能是对象类型，一般存 boolean ，number， string
// 存储的数据一般可以通过 F12即开发者工具   内的 Application 内查看
import axios from "axios";
export default {
  name: "tou",
  data() {
    return {
      val: "969bace2-ba1c-40e5-bfe3-750148f06844",
      userInfo: null,
      messageNum: 0
    };
  },
  created() {
    if (sessionStorage.getItem("token")) {
      axios
        .post("https://www.vue-js.com/api/v1/vue-shequ/accesstoken", {
          accesstoken: this.val
        })
        .then(res => {
          console.log(res.data);
          this.userInfo = res.data;
        });
    }
  },
  watch: {
    "$route.fullPath": {
      immediate: true,
      handler() {
        if (sessionStorage.getItem("token")) {
          axios
            .get(
              `https://www.vue-js.com/api/v1/vue-shequ/message/count?accesstoken=${sessionStorage.getItem(
                "token"
              )}`
            )
            .then(res => {
              this.messageNum = res.data.data;
              console.log(res.data.data);
            });
        }
      }
    }
  },
  methods: {
    login() {
      this.$router.push("/vue-shequ/");
      axios
        .post("https://www.vue-js.com/api/v1/vue-shequ/accesstoken", {
          accesstoken: this.val
        })
        .then(res => {
          // 将的到信息 存储到本地浏览器
          this.userInfo = res.data;
          sessionStorage.setItem("token", this.val);
          sessionStorage.setItem("user_id", res.data);
        });
    },
    logout() {
      this.$router.push("/vue-shequ/");
      this.userInfo = null;
      sessionStorage.clear();
    }
  }
};
</script>

<style>
.header {
  background-color: #1c6132;
}
.header .inner {
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
}
.header .inner > div {
  margin-right: 20px;
  display: flex;
  align-items: center;
}
.header .inner .logo {
  background-image: url("./../assets/logo.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 50px;
}
.header h1 {
  margin-left: 60px;
  margin-top: 0;
  margin-bottom: 0;
  color: #fff;
  font-size: 24px;
}
.header input {
  outline: none;
  border-radius: 5px;
  padding: 0 8px;
}
.logout img {
  width: 45px;
}
.logout button {
  align-self: flex-end;
}
.addArticle span {
  display: block;
  background-color: #fff;
  border-radius: 5px;
  background-color: rgb(64, 127, 163);
}
/* .header-nav {
  flex-grow: 1;
} */
.nav-ul {
  display: flex;
}
.nav-ul .nav-li {
  margin: 0 5px;
  color: #fff;
  font-size: 14px;
}
.nav-ul .nav-li a {
  color: #fff;
}
.nav-ul .spanInLi a {
  display: flex;
  color: #fff;
}
.nav-ul .spanInLi span {
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #369219;
  color: #fff;
  text-align: center;
}
</style>
