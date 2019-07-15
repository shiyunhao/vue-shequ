<template>
  <div v-if="user" class="user">
    <div class="user-inner">
      <div class="user-mesage">
        <div>
          <span :style="{color:'#369219'}" @click="goBack">主页</span>/
        </div>
        <div>
          <div class="pic">
            <img :src="user.avatar_url" alt />
            <span>{{user.loginname}}</span>
          </div>
          <div>
            <span>{{user.score}}积分</span>
          </div>
          <p>注册时间{{myMomentUser(user.create_at)}}</p>
        </div>
      </div>

      <!--  -->
      <div class="user-set">
        <p>最近创建的话题</p>
        <div class="tagulWrap">
          <div class="tagul" v-for="set in user.recent_topics" :key="set.id">
            <div class="one">
              <router-link :to="`/vue-shequ/user/${set.author.loginname}`">
                <img :src="set.author.avatar_url" alt />
              </router-link>
            </div>
            <!-- <div class="two">
          <span :style="{fontSize:'14px',color:'#444'}">{{topic.reply_count}}</span>/
          <span :style="{color:'#ccc'}">{{topic.visit_count}}</span>
            </div>-->
            <div class="four">
              <router-link :to="`/vue-shequ/topic/${set.id}`" :title="set.title">{{set.title}}</router-link>
            </div>
            <div class="five time">
              <span>{{myMomentUser(set.last_reply_at)}}</span>
            </div>
          </div>
        </div>
        <div class="more">
          <span v-if="user.recent_topics.length">
            <router-link :to="`/vue-shequ/user/${user.loginname}/topics`">查看更多》</router-link>
          </span>
          <span v-else>无话题</span>
        </div>
      </div>
      <!--  -->
      <div class="user-set">
        <p>最近参与的话题</p>
        <div class="tagulWrap">
          <div class="tagul" v-for="set in user.recent_replies" :key="set.id">
            <div class="one">
              <router-link :to="`/vue-shequ/user/${set.author.loginname}`">
                <img :src="set.author.avatar_url" alt />
              </router-link>
            </div>
            <!-- <div class="two">
          <span :style="{fontSize:'14px',color:'#444'}">{{topic.reply_count}}</span>/
          <span :style="{color:'#ccc'}">{{topic.visit_count}}</span>
            </div>-->
            <div class="four">
              <router-link :to="`/vue-shequ/topic/${set.id}`" :title="set.title">{{set.title}}</router-link>
            </div>
            <div class="five time">
              <span>{{myMomentUser(set.last_reply_at)}}</span>
            </div>
          </div>
        </div>
        <div class="more">
          <span v-if="user.recent_replies.length">查看更多》</span>
          <span v-else>无话题</span>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
  <img
    v-else
    src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4246834486,3428281355&fm=117&gp=0.jpg"
    alt
  />
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  neme: "user",
  data() {
    return {
      user: null
    };
  },
  watch: {
    "$route.fullPath": {
      immediate: true,
      handler() {
        const nowId = this.$route.params.loginname;
        console.log(this.$route.params.loginname);
        axios
          .get(`https://www.vue-js.com/api/vue-shequ/v1/user/${nowId}`)
          .then(res => {
            this.user = res.data.data;
            console.log(this.user);
          });
      }
    }
  },

  methods: {
    goBack() {
      this.$router.push("/vue-shequ/");
    },
    myMomentUser(time) {
      moment.locale("zh-cn");
      return moment(time).fromNow();
    }
  }
};
</script>

<style>
.user {
  padding: 20px 50px;
  background-color: #e1e1e1;
}
.user-mesage,
.user-set,
.user-join {
  background-color: #fff;
  border-radius: 5px;
}
.user-mesage .pic > img {
  width: 40px;
}
.user-mesage > div:first-child {
  background-color: #f6f6f6;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.user-mesage > div:nth-child(2) {
  padding: 10px;
}
.user-mesage > div:nth-child(2) > div:first-child {
  display: flex;
}
.user-mesage > div:nth-child(2) > div:first-child span {
  align-self: flex-start;
  margin-left: 10px;
}
.user-mesage > div:nth-child(2) > div:nth-child(2) {
  padding: 10px 0;
}
.user-set {
  margin-top: 20px;
}
.user-set > p {
  color: #1c6132;
  background-color: #f6f6f6;
  padding: 10px;
  margin: 0;
  border-bottom: 1px solid #ccc;
}
.user-set .more {
  padding: 10px;
}
.user-set .more span {
  cursor: pointer;
}
/* 备注 */
.tagulWrap {
  border-bottom: 1px solid #ccc;
}
.tagul {
  display: flex;
  padding: 10px;
}

.tagul:hover {
  background-color: #f5f5f5;
}
.tagul + .tagul {
  border-top: 1px solid #ccc;
}
.tagul > div {
  display: flex;
  align-items: center;
}
.tagul > .one {
  width: 30px;
  margin-right: 10px;
  flex-shrink: 0;
}
.tagul > .two {
  width: 60px;
  font-size: 12px;
  flex-shrink: 0;
}
.tagul > .three {
  width: 30px;
  font-size: 12px;
  flex-shrink: 0;
}
.tagul > .four {
  padding-left: 5px;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tagul > .four a {
  color: rgba(56, 159, 228, 0.76);
}
.tagul > .four a:visited {
  color: #888;
}
.tagul > .four a:hover {
  text-decoration: underline;
}

.tagul > .five {
  flex-shrink: 0;
}
.tagul > .one img {
  width: 100%;
}
</style>
