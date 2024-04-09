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
