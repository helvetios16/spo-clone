<template>
  <button @click="handleClick" class="card-play-button rounded-full bg-theme-green p-3">
    <component :is="isPlayingPlaylist ? PauseIcon : PlayIcon"></component>
  </button>
</template>

<script setup lang="ts">
import { getPlaylist } from '@/api/get-info-playlist.json';
import PauseIcon from '@/assets/icons/PauseIcon.vue';
import PlayIcon from '@/assets/icons/PlayIcon.vue';
import { usePlayerStore } from '@/stores/player';
import { storeToRefs } from 'pinia';
import { nextTick, ref, watch } from 'vue';

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
    const res = await getPlaylist(props.id);
    const { playlist, songs } = JSON.parse(res);

    if (!playlist || !songs || !songs[0]) {
      throw new Error('Invalid playlist data');
    }

    if (currentMusic.value.playlist?.id === props.id) {
      playStore.setPlayer(true);
      return;
    }

    playStore.setCurrentMusic({
      playlist: playlist,
      songs: songs,
      song: songs[0],
    });
    playStore.setPlayer(true);
  }

  await nextTick();
  isPlayingPlaylist.value = player.value && currentMusic.value.playlist?.id === props.id;
}

watch(player, (newValue) => {
  isPlayingPlaylist.value = newValue && currentMusic.value.playlist?.id === props.id;
});
</script>
