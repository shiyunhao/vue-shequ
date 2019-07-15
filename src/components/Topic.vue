<template>
  <div class="topic">
    <div v-if="topic" class="topicInner">
      <div class="topic-nav">
        <div class="topic-inner">
          <div class="topicN-t">
            <span
              class="typeName"
              v-if="topic.top||topic.good"
              :class="{type:true,bg:topic.top||topic.good}"
            >{{topic.top?'置顶':topic.good?'精华':''}}</span>
            <h2>{{topic.title}}</h2>
            <button
              v-show="is_login"
              :class="{collect:true,collaft:is_collect}"
              @click="changebg"
            >{{is_collect?'取消收藏':'加入收藏'}}</button>
          </div>
          <div class="topicN-b">
            <ul>
              <li>
                <b>·</b>
                发布于{{myMomentTop(topic.create_at)}}
              </li>
              <li>
                <b>·</b>
                作者{{topic.author.loginname}}
              </li>
              <li>
                <b>·</b>
                {{topic.visit_count}}次浏览
              </li>
              <li>
                <b>·</b>
                最后一次编辑是{{myMomentTop(topic.create_at)}}
              </li>
              <li>
                <b>·</b>
                来自{{topic.tab==='share'?'分享':topic.tab==='job'?'招聘':topic.tab==='ask'?'问答':'weex'}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="topicBott topic-inner">
        <div class="topic-main topic_content" v-html="topic.content"></div>
      </div>
      <!-- 评论区 -->
      <div class="comment">
        <p :style="{backgroundColor:'#f6f6f6',}">{{topic.replies.length}}回复</p>
        <ul>
          <li
            v-for="comment in topic.replies"
            :key="comment.id"
            :style="{backgroundColor:isUped(comment.id)?'#f4fcf0':''}"
          >
            <div class="comment-user">
              <img :style="{width:'30px'}" :src="comment.author.avatar_url" alt />
              <span>{{comment.author.loginname}}</span>
            </div>
            <div v-html="comment.content"></div>
            <div class="up-reply">
              <span>
                <span
                  @click="up(comment.id)"
                  :class="comment.ups.length===0?'kong':isUped(comment.id)?'dian':'moren'"
                  class="iconfont icon-zan"
                ></span>
                {{comment.ups.length?comment.ups.length:''}}
              </span>
              <span @click="addReply(comment.author.loginname)" class="huifu iconfont icon-huifu"></span>
            </div>
          </li>
        </ul>
      </div>
      <!-- 添加的回复 -->
      <div class="comment-form">
        <p>添加回复</p>
        <textarea @keyup.enter="changeComment" v-model="val" :style="{width:'100%',height:'300px'}"></textarea>
        <button @click="changeComment">回复</button>
      </div>
    </div>
    <img
      v-else
      src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4246834486,3428281355&fm=117&gp=0.jpg"
      alt
    />
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "topic",
  data() {
    return {
      topic: null,
      is_collect: false,
      val: ""
    };
  },
  computed: {
    is_login() {
      return Boolean(sessionStorage.getItem("token"));
    }
  },
  created() {
    // 获取当前页面的 路由值，fullPath的值含有太多无用的数据，使用数据自带的 params.id  ,把获取到的 id 值，给下面的axios  获取相应的后台数据
    const nowId = this.$route.params.id;
    axios
      .get(`https://www.vue-js.com/api/v1/vue-shequ/topic/${nowId}`)
      .then(res => {
        this.topic = res.data.data;
        console.log(res.data.data);
      });
  },
  methods: {
    changebg() {
      const obj = {
        topic_id: this.$route.params.id,
        accesstoken: sessionStorage.getItem("token")
      };
      // 判断 如果 if成立，则 this.is_collect 的值是true，表示已收藏了
      if (this.is_collect) {
        axios
          .post("https://www.vue-js.com/api/v1/vue-shequ/topic/de_collect", obj)
          .then(res => {
            if (res.data.success) {
              this.is_collect = false;
            }
          });
      } else {
        axios
          .post("https://www.vue-js.com/api/v1/vue-shequ/topic/collect", obj)
          .then(res => {
            if (res.data.success) {
              this.is_collect = true;
            }
          });
      }
    },
    myMomentTop(time) {
      moment.locale("zh-cn");
      return moment(time).fromNow();
    },
    changeComment() {
      axios
        .post(`https://www.vue-js.com/api/v1/vue-shequ/topic/${this.topic.id}/replies`, {
          accesstoken: sessionStorage.getItem("token"),
          content: this.val
        })
        .then(res => {
          axios
            .get(`https://www.vue-js.com/api/v1/vue-shequ/topic/${this.topic.id}`)
            .then(res => {
              this.topic = res.data.data;
              this.val = "";
            });
        });
    },
    up(id) {
      console.log(id);
      // 首先判断 用户有没有登录 ，没有登录
      if (sessionStorage.getItem("token")) {
        axios
          .post(`https://www.vue-js.com/api/v1/vue-shequ/reply/${id}/ups`, {
            accesstoken: sessionStorage.getItem("token")
          })
          .then(res => {
            console.log(sessionStorage.getItem("user_id"));
            console.log(res.data);
            if (res.data.action === "up") {
              this.topic.replies
                .find(item => item.id === id)
                .ups.push(sessionStorage.getItem("user_id"));
            } else {
              this.topic.replies.find(
                item => item.id === id
              ).ups = this.topic.replies
                .find(item => item.id === id)
                .ups.filter(item => item != sessionStorage.getItem("user_id"));
            }
          });
      } else {
        alert("登录再进行点赞行为");
      }
    },
    isUped(id) {
      return (
        this.topic.replies
          .find(item => item.id === id)
          .ups.indexOf(
            // 上边是找到跟 id 相匹配的评论
            sessionStorage.getItem("user_id")
          ) != -1
      );
    },
    addReply(loginname) {
      console.log(loginname);
      this.val = `@${loginname} `;
      document.querySelector(".huifu").focus();
    }
  }
};
</script>

<style>
.topic {
  background-color: #e1e1e1;
  padding: 20px 50px;
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
  user-select: none;
}
.topic-nav,
.topicBott,
.comment {
  background-color: #fff;
}
.topic-nav {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.topic-inner {
  padding: 20px;
}

.topicBott {
  border-top: 1px solid #ccc;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.topicN-t {
  display: flex;
}
.topicN-t > div {
  flex-shrink: 0;
}
.topicN-t span {
  font-size: 12px;
}
.topicN-t h2 {
  flex-grow: 1;
  margin: 0;
  margin-left: 10px;
}
.topicN-t .typeName {
  align-self: flex-end;
}
.topicN-t .collect {
  flex-shrink: 0;
  padding: 3px 10px;
  border: none;
  font-size: 14px;
  color: #fff;
  background-color: #369219;
  border-radius: 3px;
  outline: none;
}
.topicN-t .collect:hover {
  background-color: #6ba44e;
  cursor: pointer;
}
.topicN-t .collect.collaft {
  background-color: #e5e5e5;
  color: #111;
}
.topicN-b ul {
  display: flex;
  margin: 0;
  padding: 0;
}
.topicN-b ul li {
  margin: 0 10px 0 0;
  color: rgb(170, 169, 169);
  font-size: 12px;
}

/* 仿网页的样式 */
.topic .topic-inner .topic-main img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border: 0;
}
.topic .topic-inner .topic-main .markdown-text > :first-child,
.preview > :first-child {
  margin-top: 0;
}
.topic .topic-inner .topic-main .preview h1,
.preview h2,
.preview h3,
.preview h4,
.preview h5,
.preview h6,
.reply_area h1,
.reply_area h2,
.reply_area h3,
.reply_area h4,
.reply_area h5,
.reply_area h6,
.topic_content h1,
.topic_content h2,
.topic_content h3,
.topic_content h4,
.topic_content h5,
.topic_content h6 {
  margin: 30px 0 15px;
  border-bottom: 1px solid #eee;
}
.topic .topic-inner .topic-main h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 10px 0;
  font-family: inherit;
  font-weight: 700;
  line-height: 20px;
  color: inherit;
  text-rendering: optimizelegibility;
}
.topic .topic-inner .topic-main h4 {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.topic .topic-inner .topic-main .preview p,
.reply_content p,
.reply_form p,
.topic_content p {
  font-size: 15px;
  line-height: 1.7em;
  overflow: auto;
}
.topic .topic-inner .topic-main .markdown-text p,
.preview p {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  line-height: 2em;
  margin: 1em 0;
}
.topic .topic-inner .topic-main .preview p,
.reply_content p,
.reply_form p,
.topic_content p {
  font-size: 15px;
  line-height: 1.7em;
  overflow: auto;
}
.topic .topic-inner .topic-main .markdown-text p,
.preview p {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  line-height: 2em;
  margin: 1em 0;
}
.topic .topic-inner .topic-main body,
input,
p,
textarea {
  font-size: 14px;
  word-break: break-word;
}
.topic .comment-user {
  display: flex;
  align-items: center;
}
.topic .comment-user img {
  display: block;
  border-radius: 5px;
}
.topic .comment-user span {
  margin-left: 10px;
}
.comment-form {
  margin-top: 20px;
  border-radius: 8px;
  position: relative;
}
.comment-form p {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  margin: 0;
}
.comment-form textarea {
  border: none;
  outline: none;
  resize: none;
}
.comment-form button {
  padding: 3px 10px;
  background-color: #3374de;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  color: #fff;
  border: none;
  position: absolute;
  left: 10px;
  bottom: 10px;
}
.comment {
  margin-top: 20px;
  border-radius: 8px;
}
.comment p {
  padding: 10px 5px;
  margin: 0;
}
.comment ul {
  margin: 0;
  padding: 0;
}
.comment ul > li {
  padding: 10px 15px;
  position: relative;
}

.comment ul > li .up-reply {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.comment ul > li + li {
  border-top: 1px solid #ccc;
}
.comment ul > li .up-reply > span {
  margin-right: 10px;
}

.comment ul > li .up-reply > span > span.moren {
  color: #000;
}
.comment ul > li .up-reply > span > span.kong {
  color: #fff;
}
.comment ul > li .up-reply > span > span.dian {
  color: red;
}
.comment ul > li:hover .up-reply > span > span {
  color: #000;
}
</style>
