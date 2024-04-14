<template>
    <div id="villesEnregistrees">
        <button @click="croissang">croissang</button>
        <button @click="decroissang">décroissang</button>
            <div v-if="savedCities.length > 0">
                <h2>Villes enregistrées :</h2>
                <div v-for="(city, index) in sortedSavedCities" :key="index">
                    <p>{{ city.name }} {{ city.temp }} 
                        <!-- <a @click="removeCity(index)">Supprimer</a> -->
                    </p>
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
            sort:0
        }
    },
    computed: {
        sortedSavedCities() {
            if(this.sort==0){
                return this.savedCities.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
            }
            else if(this.sort == 1) this.croissang()
            else if(this.sort == 2) this.decroissang()
        return this.savedCities
            /*  */
        }
    },
    methods:{

        removeCity(index) {
            this.savedCities.splice(index, 1);
            localStorage.setItem(this.localStorageKey, JSON.stringify(this.savedCities));
        },
        croissang(){
            this.sort = 1
            this.savedCities = this.savedCities.sort((a, b) => {
                return a.temp < b.temp;
            });
        },
        decroissang(){
            this.sort = 2
            this.savedCities = this.savedCities.sort((a, b) => {
                return a.temp > b.temp;
            });
        }
    }
    }
</script>