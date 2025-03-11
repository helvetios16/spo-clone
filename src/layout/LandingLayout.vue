<script setup lang="ts">
import AsideMenu from '@/components/AsideMenu.vue';
</script>

<template>
  <body>
    <div id="app" class="relative h-screen p-2 gap-2 w-screen bg-theme-black-primary">
      <aside
        class="[grid-area:aside] flex-col flex overflow-y-auto bg-theme-black-secondary rounded-md p-2"
      >
        <AsideMenu />
      </aside>
      <main class="[grid-area:main] bg-theme-black-secondary rounded-md"><RouterView /></main>
      <footer class="[grid-area:player] flex flex-col bg-theme-black-secondary rounded-md">
        Footer
      </footer>
    </div>
  </body>
</template>

<style>
#app {
  display: grid;
  grid-template-areas: 'aside main main' 'player player player';
  grid-template-columns: 350px 1fr;
  grid-template-rows: 1fr auto;
  overflow: hidden;
  color: white;
}
</style>
