import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

interface CurrentMusic {
  playlist: string | null;
  song: string | null;
  songs: [];
}

export const usePlayerStore = defineStore('player', () => {
  const player = ref<boolean>(false);
  const currentMusic = reactive<CurrentMusic>({
    playlist: null,
    song: null,
    songs: [],
  });

  function setPlayer(newPlayer: boolean) {
    player.value = newPlayer;
  }
  function setCurrentMusic(newCurrentMusic: Partial<CurrentMusic>) {
    Object.assign(currentMusic, newCurrentMusic);
  }

  return { player, setPlayer, currentMusic, setCurrentMusic };
});
