<template>
  <div
    id="playlist-container"
    class="relative flex flex-col h-full bg-theme-black-secondary overflow-x-auto"
  >
    <header class="flex flex-row gap-8 px-6 mt-12">
      <picture class="aspect-square w-52 h-52 flex-none">
        <img
          :src="playlist?.cover"
          :alt="`Cover of ${playlist?.title}`"
          class="object-cover w-full h-full shadow-lg"
        />
      </picture>

      <div class="flex flex-col justify-between">
        <h2 class="flex flex-1 items-end">Playlist</h2>

        <div>
          <h1 class="text-5xl font-bold block text-white">
            {{ playlist?.title }}
            <span class=""></span>
          </h1>
        </div>

        <div class="flex-1 flex items-end">
          <div class="text-sm text-gray-300 font-normal">
            <div>
              <span>{{ playlist?.artists.join(', ') }}</span>
            </div>
            <p class="mt-1"><span class="text-white">50 songs</span>, 3hr 20min</p>
          </div>
        </div>
      </div>
    </header>
    <div class="relative z-10 px-6 pt-10"></div>
    <div
      class="absolute inset-0 bg-gradient-to-t from-theme-black-secondary via-theme-black-secondary/80 -z-10"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { playlists } from '@/lib/data';

const props = defineProps<{ id: string }>();

const playlist = playlists.find((playlist) => playlist.id === props.id);
</script>
