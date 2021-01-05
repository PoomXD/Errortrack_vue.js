<template>
<div id="AuthLogin" class="fixed-navbar d-flex align-items-center">
    <app-header></app-header>
    <router-view></router-view>
</div>
</template>

<script>
import Header from "@/components/Auth/Header";
export default {
    name: 'auth-login',
    components: {
        "app-header": Header
    }
}
</script>

<style lang="scss">

</style>
