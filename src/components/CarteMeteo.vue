<script setup>
import Date from './Date.vue';
import RechercheMeteo from './RechercheMeteo.vue';
import ResultatsMeteo from './ResultatsMeteo.vue';
import villesEnregistrees from './VillesEnregistrees.vue';
import { fetchWeather } from '../service/api/weatherRepository.js';
</script>

<template>
    <div id="carteMeteo">
        <div class="search-box">
            <input 
            type="text" 
            class="search-bar" 
            placeholder="Cherchez une ville"
            v-model="query"
            @keydown.enter="getDataWeather"
            />
            
        </div>
        
        

        <Date/>
        <ResultatsMeteo v-if="dataWeather.main" :weather="dataWeather"></ResultatsMeteo>

        <a v-if="dataWeather.main" :weather="dataWeather" @click="addCityToSaved">Enregistrer</a>

        <div v-if="savedCities.length > 0">
            <h2>Villes enregistrées :</h2>
            <div v-for="(city, index) in savedCities" :key="index" >
                <p>{{ city }} <a @click="removeCity(index)">Supprimer</a></p>
                <!-- <p>{{ city.weather.temp }}</p> -->
                <!-- TODO récupérer les données de getWeatherData -->
            </div>
        </div>

        

        <villesEnregistrees></villesEnregistrees>

    </div>
</template>

<script>

import { ref } from 'vue';


export default {
    name: 'carteMeteo',
    data(){
        const localStorageKey = 'savedCities';
        return {
            query:"",
            dataWeather:{},
            savedCities: ref(JSON.parse(localStorage.getItem(localStorageKey)) || []),
        }
    },
    methods:{
        async getDataWeather(){ 
            this.dataWeather = await fetchWeather(this.query);
            console.log(this.dataWeather);
        },
        addCityToSaved() { //vérifier les majuscules
            if (this.query && !this.savedCities.includes(this.query)) {
                this.savedCities.push(this.query);
                localStorage.setItem(localStorageKey, JSON.stringify(this.savedCities));
                this.query = ''; // Clear the input field after adding the city
            }
        },
        removeCity(index) {
            this.savedCities.splice(index, 1);
            localStorage.setItem(this.localStorageKey, JSON.stringify(this.savedCities));
        },
    }
}
</script>

