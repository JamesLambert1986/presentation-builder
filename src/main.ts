import {createApp} from 'vue'
import './style.scss'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

// @ts-ignore
import * as iamkey from '../node_modules/@iamproperty/components/src/index.js'
import '../node_modules/@iamproperty/components/dist/style.css'



import Table from '../node_modules/@iamproperty/components/src/components/Table/Table.vue'
import Accordion from '../node_modules/@iamproperty/components/src/components/Accordion/Accordion.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  console.log(from);
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle && typeof(nearestWithTitle.meta.title) === "string") {
    document.title = nearestWithTitle.meta.title
  } else {
    document.title = "IAM Key Design system and framework"
  }

  next()
})
/*
router.afterEach((to, from) => {
  
});
*/


let app = createApp(App)


//app.component('Table', Table);

/*
// Load components
for (const [key, comp] of Object.entries(iamkey)) {
  
  if(key == 'Table'){
// @ts-ignore
    app.component(key, comp);
  }
}
*/

app.component('Table', Table);
app.component('Accordion', Accordion);


//app.config.globalProperties.$shared = shared;
app.use(router).mount('#app')
