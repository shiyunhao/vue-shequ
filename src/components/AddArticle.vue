<template>
  <div class="addarticle">
    <div class="addarticle-inner">
      <div class="addarticle-map">
        <span @click="goback">主页</span>
        <span>/发布话题</span>
      </div>
      <div class="addarticle-tab">
        <span>选择板块：</span>
        <select v-model="tab">
          <option value selected>请选择</option>
          <option value="weex">weex</option>
          <option value="share">分享</option>
          <option value="ask">问答</option>
          <option value="job">工作</option>
        </select>
      </div>
      <div class="addarticle-input">
        <input v-model="title" type="text" placeholder="标题字数10字以上" />
      </div>
      <div class="addarticle-textarea">
        <quill-editor
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
        ></quill-editor>
      </div>
      <div class="addarticle-button">
        <button @click="submit">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

export default {
  name: "addarticle",
  data() {
    return {
      tab: "",
      title: "",
      content: "",
      // 富文本编辑器的配置，添加删除某些功能
      editorOption: {}
    };
  },
  components: {
    quillEditor
  },
  methods: {
    goback() {
      this.$router.push("/");
    },
    submit() {
      axios
        .post("https://www.vue-js.com/api/v1/topics", {
          tab: this.tab,
          title: this.title,
          content: this.content.trim(),
          accesstoken: sessionStorage.getItem("token")
        })
        .then(res => {
          console.log(res.data);
          this.tab = "";
          this.title = "";
          this.content = "";
          // 跳转到发布页面
          this.$router.push(`/topics/${res.data.topic_id}`);
        });
    },
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      // 当富文本编辑器输入了内容的时候，同步修改你自己的data content
      console.log("editor change!", quill, html, text);
      this.content = html;
    }
  }
};
</script>

<style>
.addarticle {
  background-color: rgba(204, 204, 204, 0.61);
  padding: 20px 50px;
}
.addarticle-inner {
  background-color: #fff;
  border-radius: 5px;
}
.addarticle-inner > .addarticle-map {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.addarticle-inner > .addarticle-map > span:first-child {
  color: #369219;
}
.addarticle-inner > .addarticle-map > span:first-child:hover {
  text-decoration: underline;
  cursor: pointer;
}
.addarticle-inner > .addarticle-map > span:last-child {
  color: #999;
}
.addarticle-inner > .addarticle-tab {
  padding: 10px;
}
.addarticle-inner > .addarticle-tab select {
  padding: 5px;
  padding-right: 80px;
  border-radius: 5px;
}
.addarticle-inner > .addarticle-input {
  padding: 10px;
}
.addarticle-inner > .addarticle-input input {
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  border: none;
  border: 1px solid #ccc;
}
.addarticle-inner > .addarticle-textarea {
  padding: 10px;
  height: 300px;
}
.addarticle-inner > .addarticle-textarea .quill-editor {
  height: 100%;
}
.addarticle-inner > .addarticle-textarea .ql-snow {
  border: none;
}
.addarticle-inner > .addarticle-textarea .ql-toolbar.ql-snow {
  border: none;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.addarticle-inner > .addarticle-button {
  border-top: 1px solid #ccc;
  padding: 10px;
  padding-top: 30px;
}
.addarticle-inner .addarticle-button button {
  padding: 3px 10px;
  font-size: 14px;
  color: #fff;
  background-color: #3374de;
  border-radius: 5px;
  border: none;
}
</style>
