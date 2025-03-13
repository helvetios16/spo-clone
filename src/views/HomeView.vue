<script setup lang="ts">
import PlayListItemCard from '@/components/PlayListItemCard.vue';
import { playlists } from '@/lib/data';
</script>

<template>
  <div id="playlist-container" class="relative transition-all duration-100 bg-theme-green">
    <div class="relative z-10 px-6 pt-10">
      <h1 class="text-3xl font-bold text-white">Good morning</h1>
      <div class="flex flex-wrap mt-6 gap-4">
        <PlayListItemCard v-for="playlist in playlists" :playlist="playlist" :key="playlist.id" />
      </div>
    </div>
    <div
      class="absolute inset-0 bg-gradient-to-t from-theme-black-secondary via-theme-black-secondary/80"
    ></div>
  </div>
</template>
