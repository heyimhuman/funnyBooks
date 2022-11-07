<script setup>
import { onMounted } from '@vue/runtime-core'
import HomePage from './components/HomePage.vue'

onMounted(()=>{
  console.log('initial');
})
</script>

<template>
  <header>
    <div class="wrapper">
      <HomePage/>
    </div>
  </header>
</template>

