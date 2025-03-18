<script setup lang="ts">
import AsideMenu from '@/components/AsideMenu.vue';
import PlayerMusic from '@/components/PlayerMusic.vue';
</script>

<template>
  <body>
    <div id="app" class="relative h-screen p-2 gap-2 w-screen bg-theme-black-primary">
      <aside
        class="[grid-area:aside] flex-col flex overflow-y-auto bg-theme-black-primary rounded-lg"
      >
        <AsideMenu />
      </aside>
      <main class="[grid-area:main] bg-theme-black-secondary rounded-lg overflow-y-auto">
        <RouterView />
      </main>
      <footer class="[grid-area:player] bg-theme-black-primary rounded-lg">
        <PlayerMusic />
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

<style is:global>
html {
  font-family: 'CircularStd', system-ui, sans-serif;
  background-color: var(--theme-black-primary);
  color: white;
}

@font-face {
  font-family: 'CircularStd';
  src: url('/fonts/CircularStd-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'CircularStd';
  src: url('/fonts/CircularStd-Book.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'CircularStd';
  src: url('/fonts/CircularStd-Light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'CircularStd';
  src: url('fonts/CircularStd-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'CircularStd';
  src: url('/fonts/CircularStd-Black.woff2') format('woff2');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
</style>
