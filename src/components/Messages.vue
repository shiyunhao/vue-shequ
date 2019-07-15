<template>
  <div class="message">
    <div v-if="has_read_messages.length||hasnot_read_messages.length" class="message-inner">
      <div class="message-new">
        <div>
          <span @click="goback">主页</span>
          <span>/</span>
          <span>新消息</span>
        </div>
        <div>
          <ul v-if="hasnot_read_messages.length">
            <li v-for="message in hasnot_read_messages" :key="message.id">
              <div>
                <router-link
                  :to="`/vue-shequ/user/${message.author.loginname}`"
                >{{message.author.loginname}}</router-link>
                <span>在话题</span>
                <router-link :to="`/vue-shequ/topics/${message.topic.id}`">{{message.topic.title}}</router-link>
                <span>中@了你</span>
              </div>
              <div class="arrirm">
                <b>√</b>
              </div>
            </li>
          </ul>
          <span v-else>无消息</span>
        </div>
      </div>
      <div class="message-read">
        <div>
          <span>过往消息</span>
        </div>
        <ul v-if="has_read_messages.length">
          <li v-for="message in has_read_messages" :key="message.id">
            <div>
              <router-link
                :to="`/vue-shequ/user/${message.author.loginname}`"
              >{{message.author.loginname}}</router-link>
              <span>{{message.type==='at'?'在话题':'回复了你的话题'}}</span>
              <router-link :to="`/vue-shequ/topics/${message.topic.id}`">{{message.topic.title}}</router-link>
              <span>{{message.type==='at'?'中@了你':''}}</span>
            </div>
            <div class="arrirm">
              <b>√</b>
            </div>
          </li>
        </ul>
        <span v-else>无消息</span>
      </div>
    </div>
    <img
      v-else
      src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4246834486,3428281355&fm=117&gp=0.jpg"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "message",
  data() {
    return {
      has_read_messages: [],
      hasnot_read_messages: []
    };
  },
  created() {
    axios
      .get(
        `https://www.vue-js.com/api/v1/vue-shequ/messages?accesstoken=${sessionStorage.getItem(
          "token"
        )}`
      )
      .then(res => {
        console.log(res.data.data.has_read_messages);
        this.has_read_messages = res.data.data.has_read_messages;
        console.log(this.has_read_messages);
        //
        this.hasnot_read_messages = res.data.data.hasnot_read_messages;
        console.log(this.hasnot_read_messages);
      });
    axios.post("https://www.vue-js.com/api/v1/vue-shequ/message/mark_all", {
      accesstoken: sessionStorage.getItem("token")
    });
  },
  methods: {
    goback() {
      this.$router.push("/vue-shequ/");
    }
  }
};
</script>

<style>
.message {
  padding: 20px 50px;
  background-color: rgba(204, 204, 204, 0.61);
}

.message .message-new {
  border-radius: 5px;
  background-color: #fff;
}
.message .message-new > div {
  padding: 10px;
}
.message .message-new > div:first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #f6f6f6;
}
.message .message-new > div:first-child > span:first-child {
  color: #369219;
}
.message .message-new > div:first-child > span {
  margin-right: 10px;
}
.message-read {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 5px;
}
.message-read > div {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}
.message-read > ul,
.message-new ul {
  margin: 0;
  padding: 0;
}
.message-read > ul > li,
.message-new ul li {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.message-read > ul > li span,
.message-new ul li span {
  margin: 0 5px;
}
.message-read > ul > li + li,
.message-new ul li + li {
  border-top: 1px solid #ccc;
}
.arrirm > b {
  font-weight: bolder;
}
.message-new ul li .arrirm > b {
  color: #ccc;
}
</style>
