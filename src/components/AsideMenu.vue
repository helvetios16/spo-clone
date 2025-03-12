<script setup lang="ts">
import HomeIcon from '@/assets/icons/HomeIcon.vue';
import LibraryIcon from '@/assets/icons/LibraryIcon.vue';
import SearchIcon from '@/assets/icons/SearchIcon.vue';
import SideMenuItem from './SideMenuItem.vue';
import SideMenuCard from './SideMenuCard.vue';
import { playlists } from '@/lib/data';
</script>

<template>
  <nav class="flex flex-col flex-1 gap-2">
    <div class="bg-theme-black-secondary rounded-md p-2">
      <ul>
        <SideMenuItem :icon="HomeIcon" title="Home" link="/" />
        <SideMenuItem :icon="SearchIcon" title="Search" link="/" />
      </ul>
    </div>
    <div class="bg-theme-black-secondary rounded-md p-2 flex-1">
      <ul>
        <SideMenuItem :icon="LibraryIcon" title="Library" link="/" />
        <SideMenuCard v-for="playlist in playlists" :playlist="playlist" :key="playlist.id" />
      </ul>
    </div>
  </nav>
</template>
