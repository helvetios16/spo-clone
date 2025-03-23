<template>
  <div class="flex flex-row justify-between w-full px-4 z-50">
    <div class="w-[200px]">
      <CurrentSong
        :image="currentMusic.song?.image || ''"
        :title="currentMusic.song?.title || ''"
        :artists="currentMusic.song?.artists || ['']"
      />
    </div>
    <div class="grid place-content-center gap-4 flex-1">
      <div class="flex justify-center flex-col items-center">
        <button class="bg-white rounded-full p-2" @click="tooglePlay">
          <component :is="player ? PauseIcon : PlayIcon"></component>
        </button>
        <PlayerSongCrontrol :audio="audio" @seek="handleSeek" />
      </div>
    </div>
    <div class="grid place-content-center">
      <PlayerVolumeControl @volumen="handleVolumen" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PauseIcon from '@/assets/icons/PauseIcon.vue';
import PlayIcon from '@/assets/icons/PlayIcon.vue';
import { usePlayerStore } from '@/stores/player';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
import CurrentSong from './CurrentSong.vue';
import PlayerVolumeControl from './PlayerVolumeControl.vue';
import PlayerSongCrontrol from './PlayerSongCrontrol.vue';

const playStore = usePlayerStore();
const { player, currentMusic } = storeToRefs(playStore);
const audio = ref(new Audio());

watch(player, (newValue) => {
  if (newValue) {
    audio.value.play().catch((error) => {
      console.error(error);
    });
  } else {
    audio.value.pause();
  }
});

watch(
  currentMusic,
  (newValue) => {
    const { song, playlist } = newValue;
    if (song) {
      const src = `/music/${playlist?.id}/0${song.id}.mp3`;
      console.log(src);
      audio.value.src = src;
      audio.value.load();
      audio.value.addEventListener('loadeddata', () => {
        audio.value.play();
      });
    }
  },
  { deep: true },
);

const tooglePlay = () => {
  if (player.value) {
    audio.value.pause();
  } else {
    audio.value.play();
  }
  playStore.setPlayer(!player.value);
};

function handleVolumen(newVolumen: number) {
  audio.value.volume = newVolumen;
}

function handleSeek(newTime: number) {
  audio.value.currentTime = newTime;
}

// se puede desmontar para que cuando se vaya un lado pare la música pero no es necesario ya que
// tiene que persistir en toda la aplicación
</script>
