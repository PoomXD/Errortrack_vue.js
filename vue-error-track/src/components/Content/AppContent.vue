<template>
  <div class="app-content">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <main>
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

<style>
</style>