<template>
    <div id="rechercheMeteo">
        
        <div class="search-box">
            <input 
            type="text" 
            class="search-bar" 
            placeholder="Cherchez une ville"
            v-model="query"
            @keypress="fetchWeather"
            />

            <div class="test" id="yes"></div>

        </div>
    </div>
</template>


<script>
    export default {
    name: 'rechercheMeteo',
    data(){
      return{
        api_key:'276c7be2977ccd817a700b194495fb74',
        url_base: 'https://api.openweathermap.org/data/2.5/',
        query:'',
        weather:{}
      }
    },
    methods:{
      fetchWeather(e){
        if(e.key=="Enter"){
          fetch(`${this.url_base}weather?q=${this.query}&lang=fr&units=metric&APPID=${this.api_key}`)
            .then(res =>{
              return res.json();
            }).then(this.setResults);
        }
      },
      setResults(results){
        this.weather = results;
      },
      
    }
    }
</script>
