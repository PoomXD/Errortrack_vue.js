<template>
  <div class="content-wrapper background" style="overflow: auto;" data-testid="info"> 
    
    <div v-if="!mobileView">
      <app-header class="col" style="position: fixed;"/>
    </div> 
    <div v-else>
      <app-header class="col" :class="{'openNav2':showNav,'closeNav2':!showNav}" 
      style="position: fixed; padding-left: 3rem;"/>
    </div>

    <div class="navigation-icon col" :class="{'openNav2':showNav,'closeNav2':!showNav}" @click="showNav = !showNav" data-testid="navigation-icon">
          <font-awesome-icon :icon="['fas', 'bars']"/>
    </div>

    <div class="sidebar" :class="{'openNav':mobileView,'closeNav':!mobileView}" >
      <div class="sidebar" :class="{'openNav2':showNav,'closeNav2':!showNav}" data-testid="sidebar">
        <app-sidebar style="position: fixed;"/>
      </div>
    </div>

    <main class="content-wrapper" :class="{'new-main':mobileView,'main':!mobileView}">
      <div class="content-wrapper" :class="{'openNav2':showNav,'closeNav2':!showNav}">
        <router-view/>
      </div>
    </main>

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
 
</style>