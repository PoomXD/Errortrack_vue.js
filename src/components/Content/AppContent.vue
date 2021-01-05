<template>
  <div class="app-content">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <main  class="content-wrapper">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Content/Header";
import Sidebar from "@/components/Content/Sidebar";

export default {
  name: "app-content",
  components: {
    "app-header": Header,
    "app-sidebar": Sidebar,
  },
};
</script>

<style lang="scss" scroped>
main{
    min-height: calc(100vh - 60px);
     margin-left:200px;
    padding: 2rem;
  }
</style>