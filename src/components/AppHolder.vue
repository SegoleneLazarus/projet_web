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
        <main>

            <carteMeteo @update:getDataWeather="handleNouvelleVille"></carteMeteo>
            <ResultatsMeteo v-if="dataWeather.main" :weather="dataWeather" :ville="ville"></ResultatsMeteo>
            <villesEnregistrees></villesEnregistrees>

        </main>
        
        <Footer></Footer>
    </div>
</template>


<script>
    import { ref } from 'vue';
    
    export default { 
        name:'AppHolder',
        data(){
            return{
                 dataWeather : {},
                ville : "",
            }
           
        },
        methods:{
            handleNouvelleVille(nouvelleVille) {
                this.ville = nouvelleVille;
                this.getDataWeather();
            },
            async getDataWeather() {
                this.dataWeather = await fetchWeather(this.ville);
                console.log(this.dataWeather);
            },

        }
    }
</script>