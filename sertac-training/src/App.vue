<template>
  <div class="flex-container">
    <BarChart></BarChart>
    <LineChart></LineChart>
    <PieChart></PieChart>
  </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarChart from './components/BarChart.vue'
import LineChart from './components/LineChart.vue'
import PieChart from './components/PieChart.vue'

export default defineComponent({
  name: 'App',
  components: {
    BarChart,
    LineChart,
    PieChart
  },
  setup() {


    return{

    }

  },
});
</script>

<style>
.flex-container {
  display: flex;
  justify-content: space-between;
}
</style>
