<template>
  <div class="sidebar">
  <div class="text-center">
    <img src="/img/logo-system.png" style="height:40px;"/>
    </div>
    <!-- <router-link to="/">Main</router-link> -->
    <div class="mt-5">
    <ul class="nav">
      <li><router-link :to="{name : 'MonitorList' }">Monitor Error</router-link></li>
      <li><router-link :to="{name : 'ListProject' }">Project Management</router-link></li>
      <li><router-link to="/page">Dashboard</router-link></li>
      <li><router-link to="/page">Document API</router-link></li>
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



</style>