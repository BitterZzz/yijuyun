<template>
    <div id="app">
         <router-view></router-view>
         <app-tab/>
         <!-- <app-column/> -->
    </div>
</template>

<script>
import Tab from './components/Tab.vue'
// import Column from './components/column.vue'
export default {
   components:{
       [Tab.name]:Tab,
    //    [Column.name]:Column,
   }
}
</script>

<style>

</style>
