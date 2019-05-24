<template>
    <div id="app">
         <router-view></router-view>
         <app-tab/>
 
    </div>
</template>

<script>
import Tab from './components/Tab.vue'

export default {
   components:{
       [Tab.name]:Tab,

   }
}
</script>

<style>

</style>
