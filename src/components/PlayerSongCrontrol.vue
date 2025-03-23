<template>
  <div class="flex gap-x-3 text-xs pt-2 items-center">
    <span class="opacity-50 w-12 text-right">{{ formatTime(currentTime) }}</span>
    <Slider
      v-model="currentTime"
      :min="0"
      :max="maxTime"
      class="w-[450px]"
      @update:model-value="handldSeek"
    />
    <span class="opacity-50 w-12">{{ formatTime(maxTime) }}</span>
  </div>
</template>

<script setup lang="ts">
import { Slider } from 'primevue';
import { onMounted, onUnmounted, ref, watchEffect } from 'vue';

const currentTime = ref(0);
const maxTime = ref(0);

const props = defineProps<{
  audio: HTMLAudioElement;
}>();

const emit = defineEmits(['seek']);

const formatTime = (time: number) => {
  if (isNaN(time) || time === null || time < 0) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const updateCurrentTime = () => {
  currentTime.value = props.audio.currentTime;
};

const updatedMaxTime = () => {
  maxTime.value = props.audio.duration;
};

const handldSeek = (value: number | number[]) => {
  if (typeof value === 'number') {
    emit('seek', value);
    currentTime.value = value;
  }
};

onMounted(() => {
  props.audio.addEventListener('timeupdate', updateCurrentTime);
  props.audio.addEventListener('loadeddata', updatedMaxTime);
});

onUnmounted(() => {
  props.audio.removeEventListener('timeupdate', updateCurrentTime);
  props.audio.removeEventListener('loadeddata', updatedMaxTime);
});

watchEffect(() => {
  if (props.audio) {
    updatedMaxTime();
  }
});
</script>
