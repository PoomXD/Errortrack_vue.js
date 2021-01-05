<template>
  <div class="sidebar">
    <!-- <router-link to="/">Main</router-link> -->
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: "app-sidebar",
};
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  //   overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
}
</style>