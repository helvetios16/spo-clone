<template>
  <button @click="handleClick" class="card-play-button rounded-full bg-theme-green p-3">
    <component :is="isPlayingPlaylist ? PauseIcon : PlayIcon"></component>
  </button>
</template>

<script setup lang="ts">
import { get } from '@/api/get-info-playlist.json';
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

const isPlayingPlaylist = ref<boolean>(false);

async function handleClick() {
  if (isPlayingPlaylist.value) {
    playStore.setPlayer(false);
  } else {
    const res = await get(props.id);
    const { playlist, songs } = JSON.parse(res);

    playStore.setCurrentMusic({
      playlist: playlist,
      songs: songs,
      song: songs[0],
    });
    playStore.setPlayer(true);
  }
  isPlayingPlaylist.value = player.value && currentMusic.value.playlist?.id === props.id;
}
</script>
