<script setup>
import { onMounted } from '@vue/runtime-core'

onMounted(()=>{
  console.log('initial');
})
</script>

<template>
  <header>
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </header>
</template>

