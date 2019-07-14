<template>
  <div class="footer">
    <div class="footer-top">
      <a href="javascript:void(0)">RSS</a>|
      <a href="javascript:void(0)">源码地址</a>
    </div>
    <div class="footer-middle">
      <span>服务器搭建在</span>
      <a href="https://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=Ionichina&utm_medium=display">
        <img src="https://www.vue-js.com/public/images/ucloud.png" alt />
      </a>
      <span>，存储赞助商为</span>

      <a href="https://www.qiniu.com/?ref=ionichina">
        <img src="https://www.vue-js.com/public/images/qiniu.png" alt />
      </a>
    </div>
    <div class="footer-bottom">
      <p>声明：内容均来自于网络，如有侵权行为请发送邮件至vueclub@126.com,我们将在第一时间删除</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom"
};
</script>

<style>
.footer {
  padding: 20px 50px;
}
.footer-top {
  display: flex;
}
.footer-top a {
  margin: 1px 5px;
  color: #888;
}
.footer-middle {
  display: flex;
  align-items: center;
}
</style>
