<template>
  <div class="sidebar">
  <div class="text-center">
    <img src="/img/logo-system.png" style="height:45px;"/>
    </div>
    <!-- <router-link to="/">Main</router-link> -->
    <div class="mt-4" >
    <ul class="nav font-no-size-color">
      <li><router-link :to="{name : 'MonitorList' }"
        :class="{'router-link-active': 
          $route.fullPath === '/home/monitor/add' || 
          $route.fullPath === '/home/monitor/detail' || 
          $route.fullPath === '/home/monitor/task'}">
          <font-awesome-icon :icon="['fas', 'desktop']"/>  Monitor Error
        </router-link></li>
      <li><router-link :to="{name : 'ListProject' }" 
        :class="{'router-link-active': 
          $route.fullPath === '/home/project/list' || 
          $route.fullPath === '/home/project/detail' || 
          $route.fullPath === '/home/project/add' || 
          $route.fullPath === '/home/project/edit'}">
          <font-awesome-icon :icon="['far', 'check-square']"/>  Project Management
        </router-link></li>
      <li><router-link to="/page"><font-awesome-icon :icon="['fas', 'chart-pie']"/>  Dashboard</router-link></li>
      <li><router-link to="/page"><font-awesome-icon :icon="['fas', 'code']"/>  Document API</router-link></li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-sidebar",
  methods:{
    gotoMonitorList(){
      //MonitorList
    }
  }
};
</script>

<style></style>