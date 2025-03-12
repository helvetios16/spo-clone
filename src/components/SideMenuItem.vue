<template>
  <li>
    <a
      class="flex gap-3 text-zinc-400 hover:text-zinc-100 items-center py-3 px-3 font-medium transition duration-300"
      v-bind:href="`${link}`"
    >
      <component :is="icon" />
      <span>{{ title }}</span>
    </a>
  </li>
</template>

<script setup lang="ts">
import { type Component } from 'vue';

defineProps<{
  icon: Component;
  title: string;
  link: string;
}>();
</script>
