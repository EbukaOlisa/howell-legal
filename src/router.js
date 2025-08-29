// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import PrivacyPolicy from './pages/PrivacyPolicy.vue'
import TermsOfService from './pages/TermsOfService.vue'
import DataDeletion from './pages/DataDeletion.vue'

const routes = [
  { path: '/privacy', component: PrivacyPolicy },
  { path: '/terms', component: TermsOfService },
  { path: '/delete', component: DataDeletion },
]

const router = createRouter({
  history: createWebHashHistory(), // <-- hash mode
  routes,
})

export default router
