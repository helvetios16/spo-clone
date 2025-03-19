<template>
  <component :is="iconVolume"></component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import VolumeSilencedIcon from '@/assets/icons/VolumeSilencedIcon.vue';
import VolumeLowIcon from '@/assets/icons/VolumeLowIcon.vue';
import VolumeMediumIcon from '@/assets/icons/VolumeMediumIcon.vue';
import VolumeFullIcon from '@/assets/icons/VolumeFullIcon.vue';

const props = defineProps<{
  volume: number;
}>();

const iconVolume = computed(() => {
  if (props.volume === 0) {
    return VolumeSilencedIcon;
  } else if (props.volume > 0 && props.volume <= 0.3) {
    return VolumeLowIcon;
  } else if (props.volume > 0.3 && props.volume <= 0.99) {
    return VolumeMediumIcon;
  } else {
    return VolumeFullIcon;
  }
});
</script>
