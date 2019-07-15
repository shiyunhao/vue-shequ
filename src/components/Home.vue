<template>
  <div class="home">
    <div class="header-nav">
      <ul>
        <li>
          <router-link
            :class="$route.fullPath.indexOf('all')!= -1||$route.fullPath==='/vue-shequ/'?'active':''"
            to="/vue-shequ/?tab=all"
          >全部</router-link>
        </li>
        <li>
          <router-link :class="$route.fullPath.indexOf('good')!= -1?'active':''" to="/vue-shequ/?tab=good">精华</router-link>
        </li>
        <li>
          <router-link
            :class="$route.fullPath.indexOf('weex')!= -1?'active':''"
            to="/vue-shequ/?tab=weex"
          >weex</router-link>
        </li>
        <li>
          <router-link
            :class="$route.fullPath.indexOf('share')!= -1?'active':''"
            to="/vue-shequ/?tab=share"
          >分享</router-link>
        </li>
        <li>
          <router-link :class="$route.fullPath.indexOf('ask')!= -1?'active':''" to="/vue-shequ/?tab=ask">问答</router-link>
        </li>
        <li>
          <router-link :class="$route.fullPath.indexOf('job')!= -1?'active':''" to="/vue-shequ/?tab=job">招聘</router-link>
        </li>
      </ul>
    </div>
    <div>
      <div class="header-main">
        <ul v-if="topics.length">
          <li v-for="topic in topics" :key="topic.id">
            <div class="one">
              <router-link :to="`/vue-shequ/user/${topic.author.loginname}`">
                <img :src="topic.author.avatar_url" alt />
              </router-link>
            </div>
            <div class="two">
              <span :style="{fontSize:'14px',color:'#444'}">{{topic.reply_count}}</span>/
              <span :style="{color:'#ccc'}">{{topic.visit_count}}</span>
            </div>
            <div
              class="three"
              v-if="$route.fullPath ==='/vue-shequ/?tab=all'||$route.fullPath==='/'||topic.good||topic.top"
            >
              <span
                :class="{type:true,bg:topic.top||topic.good}"
              >{{topic.top?'置顶':topic.good?'精华':topic.tab==='ask'?'问答':topic.tab==='share'?'分享':topic.tab==='job'?'招聘':'week'}}</span>
            </div>
            <div class="four">
              <router-link :to="`/vue-shequ/topics/${topic.id}`" :title="topic.title">{{topic.title}}</router-link>
            </div>
            <div class="five time">
              <span>{{myMoment(topic.last_reply_at)}}</span>
            </div>
          </li>
        </ul>
        <img
          v-else
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4246834486,3428281355&fm=117&gp=0.jpg"
          alt
        />
        <el-pagination
          @current-change="change"
          :page-size="20"
          layout="prev, pager, next"
          :total="pages"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "home",
  data() {
    return {
      topics: [],
      pages: 860
    };
  },
  watch: {
    "$route.fullPath": {
      immediate: true,
      handler() {
        const tab = this.$route.query.tab || "all";
        const num = Number(this.$route.query.page) || 1;
        console.log(tab);
        this.pages =
          tab === "all"
            ? 860
            : tab === "good"
            ? 20
            : tab === "weex"
            ? 20
            : tab === "ask"
            ? 580
            : tab === "share"
            ? 260
            : 40;
        if (this.topics.length) {
          this.topics = [];
        }
        // console.log(link);
        axios
          .get(`https://www.vue-js.com/api/v1/vue-shequ/topics/?tab=${tab}&page=${num}`)
          .then(res => {
            setTimeout(() => {
              this.topics = res.data.data;
              // console.log(res.data.data[0]);
            }, 300);
          });
      }
    }
  },
  methods: {
    myMoment(time) {
      // 借用 moment 组件， 实现计算 最后评论到现在的时间
      moment.locale("zh-cn");
      // 实现中文化
      return moment(time).fromNow();
    },
    change(text) {
      const tab = this.$route.query.tab || "all";
      console.log(this.$route.query);
      this.$router.push(`/vue-shequ/?tab=${tab}&page=${text}`);
    }
  }
};
</script>

<style>
.home {
  padding: 20px 50px;
  background-color: rgba(204, 204, 204, 0.61);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
  user-select: none;
}
.home .header-nav {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgba(218, 245, 188, 0.61);
}
.home .header-nav > ul {
  margin: 0;
  padding: 0;
  display: flex;
}
.home .header-nav > ul > li {
  margin: 10px 0 10px 10px;
}
.home .header-nav > ul > li > a {
  color: rgba(25, 133, 25, 0.863);
}
.home .header-nav > ul > li .active {
  background-color: rgba(7, 105, 7, 0.621);
  color: #fff;
  border-radius: 5px;
  display: block;
  padding: 3px;
}
.home .header-main > ul {
  margin: 0;
  padding: 0;
}
.home .header-main {
  padding: 10px;
  background-color: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.home .header-main > ul > li {
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.home .header-main > ul > li:hover {
  background-color: #f5f5f5;
}
/*  */
.home .header-main .one {
  width: 30px;
  margin-right: 10px;
  flex-shrink: 0;
}
.home .header-main .two {
  width: 60px;
  font-size: 12px;
  flex-shrink: 0;
}
.home .header-main .three {
  width: 30px;
  font-size: 12px;
  flex-shrink: 0;
}
.home .header-main .four {
  padding-left: 5px;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.home .header-main .four a {
  color: #111;
}
.home .header-main .four a:visited {
  color: #888;
}
.home .header-main .four a:hover {
  text-decoration: underline;
}

.home .header-main .five {
  flex-shrink: 0;
}
.home .header-main .one img {
  width: 100%;
}
/*  */
.home .header-main > ul > li + li {
  border-top: 1px solid rgba(221, 217, 217, 0.801);
}
.type {
  background-color: #e5e5e5;
  color: #999;
  padding: 3px;
  border-radius: 5px;
}
.bg {
  color: #fff;
  background-color: #369219;
}
</style>
