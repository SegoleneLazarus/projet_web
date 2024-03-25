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
      
    </div>
</template>


<script>
import { ref } from 'vue';
export default {
    name: 'resultatsMeteo',
    props: {
        weather: { type: Promise, type: Object, required: true },
    },
    mounted(){
        console.log("mounted");
        console.log(this.weather);
    },
    // data(){
    //     const localStorageKey = 'savedCities';
    //     return {
    //         savedCities: ref(JSON.parse(localStorage.getItem(localStorageKey)) || []),
    //     }
    // },
    // methods:{
    //     addCityToSaved() { //vérifier les majuscules
    //         if (this.query && !this.savedCities.includes(this.query)) {
    //             this.savedCities.push(this.query);
    //             localStorage.setItem(localStorageKey, JSON.stringify(this.savedCities));
    //             this.query = ''; // Clear the input field after adding the city
    //         }
    //     },
    // }
}
</script>
