<template>
    <div>
        <b-navbar toggleable="lg">
            <b-navbar-brand href="#">Dropsyky</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="/aboutMe">About Me</b-nav-item>
                    <b-nav-item href="/book">My Book</b-nav-item>
                    <b-nav-item href="/contact">Contact</b-nav-item>
                    <b-nav-item href="https://www.instagram.com/dropsyky/?hl=fr" target="_blank"><i class="social-icon fab fa-instagram"></i></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <app-carousel></app-carousel>
    </div>
</template>

<script>
    import Carousel from './Carousel.vue';
    export default {
        components: {
            'app-carousel': Carousel
        }
    }
</script>

<style>
    /* .navbar {
        height: 100px;
    }
    ul {
        list-style: none;
    }
    .nav-item {
        padding:  10px;
        font-size: 3rem;
    }

    .fa-instagram {
        font-size: 50px;
    }
    a:link {
        text-decoration: none!important;
    } */
</style>