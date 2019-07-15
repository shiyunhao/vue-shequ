<template>
  <div>
    <Header @goHome="goHome" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Header,
    Footer
  },
  methods: {
    goHome() {
      this.$router.push("/vue-shequ/");
    }
  }
};
</script>

<style>
</style>
