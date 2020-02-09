<template>
    <div class="body container-fluid">
        <app-header></app-header>
        <app-carousel></app-carousel>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        components: {
            'app-header': Header
        },
        data() {
            return {
            }
        }
    }
</script>
<style>
    /* .body {
        font-family: "Montserrat";
    }

    .container-fluid {
        padding: 1% 7%;
    } */
</style>