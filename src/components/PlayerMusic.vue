<template>
  <div class="flex flex-row justify-between w-full px-4 z-50">
    <div>Current song ...</div>
    <div class="grid place-content-center gap-4 flex-1">
      <div class="flex justify-center">
        <button class="bg-white rounded-full p-2" @click="tooglePlay">
          <component :is="play ? PauseIcon : PlayIcon"></component>
        </button>
      </div>
    </div>
    <div>Volumen</div>
  </div>
</template>

<script setup lang="ts">
import PauseIcon from '@/assets/icons/PauseIcon.vue';
import PlayIcon from '@/assets/icons/PlayIcon.vue';
import { ref } from 'vue';

const play = ref(false);
const audio = new Audio();

audio.src = '/music/1/01.mp3';

const tooglePlay = () => {
  if (play.value) {
    audio.pause();
  } else {
    audio.volume = 0.5;
    audio.play();
  }
  play.value = !play.value;
};

// se puede desmontar para que cuando se vaya un lado pare la música pero no es necesario ya que
// tiene que persistir en toda la aplicación
</script>
