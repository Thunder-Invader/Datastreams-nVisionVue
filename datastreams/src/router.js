import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './views/index.vue'
import DocumentsPage from './views/DocumentsPage.vue'
import SendingPage from './views/SendingPage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/Dashboard', component: index },
  { path: '/Documents', component: DocumentsPage },
  { path: '/Sending', component: SendingPage }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
