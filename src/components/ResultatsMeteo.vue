<template>
    <div id="resultatsMeteo">
        
        <div class="weather_wrap">
            <div class="location-box">
                <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
            </div>

            <div class="weather-box">
                <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
                <div class="weather">{{ weather.weather[0].main }}</div>
            </div>
        </div>

        <a @click="addCityToSaved(weather.name, Math.round(weather.main.temp))">Enregistrer</a>
      
    </div>
</template>


<script>

import { onUpdated, ref, watch } from 'vue';

export default {
  name: 'ResultatMeteo',
  props:{
    ville: String,
    weather: { type: Promise, type: Object, required: true },
  },
  mounted(){
        console.log("mounted");
        console.log(this.weather);
    },
    data(){
        const localStorageKey = 'savedCities';
        return {
            savedCities: JSON.parse(localStorage.getItem('savedCities')) || []
        }
    },
    methods:{
        addCityToSaved(cityName, tempNumber) {
            if (!this.savedCities.some(city => city.name == cityName)) {
                this.savedCities.push({name:cityName, temp:tempNumber});
                localStorage.setItem('savedCities', JSON.stringify(this.savedCities));
            }
        },
        removeCity(index) {
            this.savedCities.splice(index, 1);
            localStorage.setItem(localStorageKey, JSON.stringify(this.savedCities));
        },
        onUpdateSaveCity() {
            this.$emit("update:getDataWeather", this.query);
        }
    }
};


</script>
