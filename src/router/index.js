import HomePage from '../components/HomePage.vue'
import ElementPage from "../components/pages/ElementPage.vue"
import VueStudyPage from "../components/pages/VueStudy.vue"
import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/elementPage',
        name: 'element',
        component: ElementPage
    },
    {
        path: '/vueStudy',
        name: 'vueStudy',
        component: VueStudyPage
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;