<template>
    <div id="villesEnregistrees">
        <div v-if="savedCities.length > 0">
            <h2>Villes enregistrées :</h2>
            <div v-for="(city, index) in savedCities" :key="index">
                <p>{{ city }}</p>
                <button @click="removeCity(index)">X</button>
            </div>
        </div>
    </div>
</template>


<script>

import { ref } from 'vue';

    export default {
    name: 'villesEnregistrees',
    data(){
        const localStorageKey = 'savedCities';
        return{
            savedCities: ref(JSON.parse(localStorage.getItem(localStorageKey)) || []),
        }
    },
    methods:{
        removeCity(index) {
            this.savedCities.splice(index, 1);
            localStorage.setItem(this.localStorageKey, JSON.stringify(this.savedCities));
        },
    }
    }
</script>