<template>

  <div id="app"> 
  
    <main>

      <carteMeteo/>
      
    </main>
    
  </div>
<!-- TODO bouton qui enregistre {{ weather.name }} dans une variable qui permettra de retrouver tous les bazards -->
</template>

<script type="module">

  import carteMeteo from './components/CarteMeteo.vue';

  export default{
    name:"app",
    components: { carteMeteo }
  }

</script>