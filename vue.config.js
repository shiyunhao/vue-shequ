module.exports = {
  // 当 vue 的环境处于 puoduction（生产环境）时，将 publicPath 改成 /1903-vue-shequ/  ,开发环境时  /
  publicPath: process.env.NODE_ENV === "production" ? "/1903-vue-shequ/" : "/"
};
