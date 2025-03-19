<template>
  <div class="flex justify-center items-center gap-x-3 text-white">
    <button class="opacity-70 hover:opacity-100 transition" @click="handleClick">
      <PlayerVolumenIcon :volume="volume" />
    </button>
    <Slider v-model="volume" :min="0" :max="1" :step="0.01" class="w-[95px]" />
  </div>
</template>

<script setup lang="ts">
import { Slider } from 'primevue';
import { ref, watch } from 'vue';
import PlayerVolumenIcon from './PlayerVolumenIcon.vue';

const volume = ref(1);
const previousVolume = ref(0);
const emit = defineEmits(['volumen']);

watch(volume, (newVolume) => {
  emit('volumen', newVolume);
  volume.value = newVolume;
});

function handleClick() {
  if (volume.value === 0) {
    volume.value = previousVolume.value;
  } else {
    previousVolume.value = volume.value;
    volume.value = 0;
  }
}
</script>
