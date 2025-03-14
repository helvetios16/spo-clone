<template>
  <article
    class="group relative rounded-md hover:bg-theme-black-secondary shadow-lg hover:shadow-xl bg-zinc-500/30 transition-all duration-300"
  >
    <div
      class="absolute right-4 bottom-20 translate-y-4 transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10"
    >
      <CardPlayButton :id="id" />
    </div>
    <RouterLink
      :to="`/playlist/${id}`"
      class="playlist-item transition-all duration-300 flex relative p-2 overflow-hidden gap-2 pb-6 w-44 flex-col"
    >
      <picture class="aspect-square w-full h-auto flex-none">
        <img
          :src="cover"
          :alt="`Cover of ${title} by ${artistString}`"
          class="object-cover w-full h-full rounded-md"
        />
      </picture>
      <div class="flex flex-auto flex-col px-2">
        <h4 class="text-sm text-white">
          {{ title }}
        </h4>
        <span class="text-xs text-gray-400">
          {{ artistString }}
        </span>
      </div>
    </RouterLink>
  </article>
</template>

<script setup lang="ts">
import { type Playlist } from '@/lib/data';
import CardPlayButton from './CardPlayButton.vue';

const props = defineProps<{
  playlist: Playlist;
}>();

const { id, title, cover, artists } = props.playlist;

const artistString = artists.join(', ');
</script>
