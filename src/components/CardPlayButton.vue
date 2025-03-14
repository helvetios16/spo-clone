<template>
  <button @click="handleClick" class="card-play-button rounded-full bg-theme-green p-3">
    <component :is="player ? PauseIcon : PlayIcon"></component>
  </button>
</template>

<script setup lang="ts">
import PauseIcon from '@/assets/icons/PauseIcon.vue';
import PlayIcon from '@/assets/icons/PlayIcon.vue';
import { usePlayerStore } from '@/stores/player';
import { storeToRefs } from 'pinia';

const playStore = usePlayerStore();
const { player } = storeToRefs(playStore);

function handleClick() {
  playStore.setPlayer(!player.value);
}
</script>
