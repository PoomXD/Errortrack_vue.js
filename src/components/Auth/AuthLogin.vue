<template>
<div id="AuthLogin " class="AuthMain h-100" >
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
.AuthMain{
    background-color: #f4f9ff;

}

</style>
