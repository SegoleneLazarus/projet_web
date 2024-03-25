<template>
    <div id="date">
        <div class="date">{{ dateBuilder() }}</div>
    </div>
</template>


<script>
    export default {
        name: 'Date',
        methods:{
            dateBuilder () {
                let d = new Date();
                let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
                let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

                let day = days[d.getDay()];
                let date = d.getDate();
                let month = months[d.getMonth()];
                let year = d.getFullYear();

                return `${day} ${date} ${month} ${year}`;
            }
        }
    }
</script>

