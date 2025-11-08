import CowSay from './components/CowSay.vue'
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:cow?',
      name: 'cow',
      component: CowSay,
      props: true,
    },
  ],
})
