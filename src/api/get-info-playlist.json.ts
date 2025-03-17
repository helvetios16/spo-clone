import { allPlaylists, songs as allSongs } from '@/lib/data';

export async function get(id: string) {
  const playlist = allPlaylists.find((item) => item.id === id);
  const songs = allSongs.filter((song) => song.albumId === playlist?.albumId);

  return JSON.stringify({ playlist, songs });
}
