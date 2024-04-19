<template>

  <div id="app"> 
    
      <AppHolder/>
    
  </div>
<!-- TODO bouton qui enregistre {{ weather.name }} dans une variable qui permettra de retrouver tous les bazards -->
</template>

<script type="module">

  import AppHolder from './components/AppHolder.vue';

  export default{
    name:"app",
    components: { AppHolder }
  }

</script>