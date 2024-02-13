// @ts-nocheck
const routes = [
  { name: 'Home', path: '/', component: () => import('./views/Home.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', meta: { title: 'Page not found' }, component: () => import('./views/PageNotFound.vue') }
]

export default routes
