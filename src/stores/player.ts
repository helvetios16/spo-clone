import type { Playlist, Song } from '@/lib/data';
import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

interface CurrentMusic {
  playlist: Playlist | null;
  song: Song | null;
  songs: Song[] | null;
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
