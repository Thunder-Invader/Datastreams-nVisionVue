import Vue from 'vue'
import VueRouter from 'vue-router'
import Berichten from './views/Berichten.vue'
import Dashboard from './views/Dashboard.vue'
import DocumentsPage from './views/DocumentsPage.vue'
import SendingPage from './views/SendingPage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/Dashboard', component: Dashboard },
  { path: '/Documents', component: DocumentsPage },
  { path: '/Sending', component: SendingPage },
  { path: '/Berichten', component: Berichten }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
