import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/layout/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
      ],
    },
  ],
});
