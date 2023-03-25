import { createApp } from 'vue'
import App from './App.vue'
// ! STEP 1: Import createRouter, createWebHistory from vue-router
import { createRouter, createWebHistory} from 'vue-router'
//! STEP 4: import the page you're wanting to route to
import ShowResource from './components/nature-resource/ShowResource.vue'
import ResourceResult from './components/nature-resource/ResourceResult.vue'
import HomePage from './components/nature-resource/ResourceResult.vue'

// ! STEP 2: create your route
const router = createRouter({
    history: createWebHistory(),
    //! STEP 3: create a routes array
    routes: [
        //! STEP 5: each object is 1 route, you need to import the vue file and have your component method target that page
        {path: '/', component:HomePage },
        {path: '/ShowResource/:id', component: ShowResource, props: true},
        {path: '/ResourceResult', component: ResourceResult, props: true},
    ],
})


const app = createApp(App)

app.use(router)


app.mount('#app');
