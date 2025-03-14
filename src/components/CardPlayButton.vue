<template>
  <button @click="handleClick" class="card-play-button rounded-full bg-theme-green p-3">
    <component :is="isPlayingPlaylist ? PauseIcon : PlayIcon"></component>
  </button>
</template>

<script setup lang="ts">
import PauseIcon from '@/assets/icons/PauseIcon.vue';
import PlayIcon from '@/assets/icons/PlayIcon.vue';
import { usePlayerStore } from '@/stores/player';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const props = defineProps<{
  id: string;
}>();

const playStore = usePlayerStore();
const { player, currentMusic } = storeToRefs(playStore);

const isPlayingPlaylist = ref();

function handleClick() {
  playStore.setCurrentMusic({
    playlist: {
      id: props.id,
    },
  });
  playStore.setPlayer(!player.value);
  isPlayingPlaylist.value = player.value && currentMusic.value.playlist?.id === props.id;
}
</script>
