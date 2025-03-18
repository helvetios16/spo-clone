<template>
  <Slider v-model="volumen" :min="0" :max="1" :step="0.01" class="w-[95px]" />
</template>

<script setup lang="ts">
import { Slider } from 'primevue';
import { ref, watch } from 'vue';

const volumen = ref(1);
const emit = defineEmits(['volumen']);
watch(volumen, (newVolumen) => {
  emit('volumen', newVolumen);
});
</script>
