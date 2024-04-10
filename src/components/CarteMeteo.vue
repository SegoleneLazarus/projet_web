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
            @keydown.enter="onUpdateCity"
            />
            <button id="searchQuerySubmit" class="search-button" type="submit" name="searchQuerySubmit" @click="onUpdateCity">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
            </svg>
            </button>
            
        </div>
        
        <Date/>

    </div>
</template>

<script>

import { ref } from 'vue';

const data = () => {
    const localStorageKey = 'savedCities';
  return {
    query: "",
    savedCities: ref(JSON.parse(localStorage.getItem(localStorageKey)) || [])
  };
};

const methods = {
  
  onUpdateCity() {
    this.$emit("update:getDataWeather", this.query);
  },
  
};

export default {
  name: 'CarteMeteo',
  data,
  emits:["update:getDataWeather"],
  methods
};


// export default {
//     name: 'carteMeteo',
//     data(){
//         const localStorageKey = 'savedCities';
//         return {
//             query:"",
//             dataWeather:{},
//             savedCities: ref(JSON.parse(localStorage.getItem(localStorageKey)) || []),
//         }
//     },
//     emit:[getDataWeather],
//     //faire un emit??
//     methods:{
//         async getDataWeather(){ 
//             this.dataWeather = await fetchWeather(this.query);
//             console.log(this.dataWeather);
//         },
//         emitCustomEvent: function() {
//             this.$emit(this.getDataWeather, "Hello World")
//         },
//         addCityToSaved() { //vérifier les majuscules
//             this.query = this.query.toUpperCase();
//             if (this.query && !this.savedCities.includes(this.query)) {
                
//                 this.savedCities.push(this.query);
//                 localStorage.setItem(localStorageKey, JSON.stringify(this.savedCities));
//                 this.query = ''; // Clear the input field after adding the city
//             }
//         },
//         removeCity(index) {
//             this.savedCities.splice(index, 1);
//             localStorage.setItem(this.localStorageKey, JSON.stringify(this.savedCities));
//         },
//     }
// }
</script>

