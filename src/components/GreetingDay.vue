<template>
  <h1 class="text-3xl font-bold text-white">{{ gretting }}</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const gretting = ref<string>('Good morning');

if (new Date().getHours() >= 12) {
  gretting.value = 'Good afternoon';
} else if (new Date().getHours() >= 18) {
  gretting.value = 'Good evening';
}
</script>
