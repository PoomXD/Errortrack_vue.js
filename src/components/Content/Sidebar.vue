<template>
  <div class="sidebar">
  <div class="text-center">
    <img src="/img/logo-system.png" style="height:45px;"/>
    </div>
    <!-- <router-link to="/">Main</router-link> -->
    <div class="mt-4">
    <ul class="nav font-no-size-color">
      <li><router-link :to="{name : 'MonitorList' }"
        :class="{'router-link-active': $route.fullPath === '/monitor/list' || 
          $route.fullPath === '/monitor/detail'}">
          <font-awesome-icon :icon="['fas', 'desktop']"/>  Monitor Error
        </router-link></li>
      <li><router-link :to="{name : 'ListProject' }" 
        :class="{'router-link-active': $route.fullPath === '/project/list' || 
          $route.fullPath === '/project/detail' || 
          $route.fullPath === '/project/add' || 
          $route.fullPath === '/project/edit'}">
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

<style>

</style>