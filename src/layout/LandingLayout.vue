<script setup lang="ts">
import AsideMenu from '@/components/AsideMenu.vue';
</script>

<template>
  <body>
    <div id="app" class="relative h-screen p-2 gap-2 w-screen bg-theme-black-primary">
      <aside
        class="[grid-area:aside] flex-col flex overflow-y-auto bg-theme-black-primary rounded-lg p-2"
      >
        <AsideMenu />
        <main class="[grid-area:main] bg-theme-black-secondary rounded-lg"><RouterView /></main>
      </aside>
      <footer class="[grid-area:player] min-h-[100px] bg-theme-black-secondary rounded-lg">
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
html {
  background-color: var(--theme-black-primary);
}
</style>

// agregar fuentes, data de musica, colores y musica mp3 y fuente woff2
