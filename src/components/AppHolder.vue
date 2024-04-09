<script setup>
import Date from './Date.vue';
import RechercheMeteo from './RechercheMeteo.vue';
import ResultatsMeteo from './ResultatsMeteo.vue';
import villesEnregistrees from './VillesEnregistrees.vue';
import carteMeteo from './CarteMeteo.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
import { fetchWeather } from '../service/api/weatherRepository.js';

</script>


<template>
    <div id="AppHolder">
        <Header></Header>
        <carteMeteo></carteMeteo>
        <Footer></Footer>
    </div>
</template>


<script>
    export default {
    name: 'AppHolder',
    methods:{
        async getDataWeather(){ 
            this.dataWeather = await fetchWeather(this.query);
            console.log(this.dataWeather);
        },
    }
    }
</script>