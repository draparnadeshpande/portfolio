import AboutView from '@/views/AboutView.vue';
import GroupView from '@/views/GroupView.vue';
import HomePage from '@/views/HomePage.vue';
import OutreachView from '@/views/OutreachView.vue';
import PublicationsView from '@/views/PublicationsView.vue';
import ResearchView from '@/views/ResearchView.vue';
import ScienceedView from '@/views/ScienceedView.vue';
import STMLabView from '@/views/STMLabView.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/About_Me',
    name: 'About Me',
    component: AboutView
  },
  {
    path: '/STM_Lab',
    name: 'STM_Lab',
    component: STMLabView
  },
  {
    path: '/ResearchAreas',
    name: 'Research Areas',
    component: ResearchView
  },
  {
    path: '/Publications',
    name: 'Publications',
    component: PublicationsView
  },
  {
    path: '/Outreach',
    name: 'Outreach',
    component: OutreachView
  },
  {
    path: '/ResearchGroup',
    name: 'Research Group',
    component: GroupView
  },
  {
    path: '/Science_Ed',
    name: 'ScienceEd',
    component: ScienceedView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
