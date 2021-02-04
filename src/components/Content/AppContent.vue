<template>
  <div class="app-content background">
    
    <div class="content" :class="{'open':showNav}"> 
      <div v-if="!mobileView">
        <app-sidebar/>
        <app-header/>
        <main  class="content-wrapper">
          <router-view></router-view>
        </main>
      </div>
      <div v-else>
        <app-sidebar style=" margin-left: -250px;"/>
        <app-header style="margin-left: 0px; "/>
        <div id="navigation-icon" @click="showNav = !showNav">
         <font-awesome-icon :icon="['fas', 'bars']"/>
        </div>
      <main  class="content-wrapper" :class="{'open2':showNav}">
        <router-view style="margin-left: -18rem"></router-view>
      </main>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Content/Header";
import Sidebar from "@/components/Content/Sidebar";

export default {
  name: "app-content",
  data: () =>{
    return{
      mobileView: true,
      showNav: false
    }
  }, 
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 1024;
      this.showNav = false;
    },
  },
  components: {
    "app-header": Header,
    "app-sidebar": Sidebar,
  },
   created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
};
</script>

<style lang="scss" scroped>
main{
    min-height: calc(100vh - 60px);
    margin-left: 20rem;
    padding-right: 1%;
    margin-top: 1.5rem;
  }
  #navigation-icon {
  padding: 10px 40px 0px 10px;
  margin-right: 90%;
  margin-top: -90px;
  cursor: pointer;
  font-size: 50px;
  }
  .router-view {
  position: absolute;
  top: 10px;
  width: calc(100% - 60px);
  height: calc(100vh - 60px);
  padding: 20px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
  .open {
    transform: translateX(250px);
    transition: 1s transform cubic-bezier(0,.12,.14,1);
  }
  .open2 {
    transform: translateX(-10px);
    transition: 1s transform cubic-bezier(0,.12,.14,1);
  }

</style>