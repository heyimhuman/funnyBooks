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

var a = 1;
function Fn1() {
    var a = 2;
    // console.log(this.a+a);
};
function Fn2() {
    var a = 10;
    Fn1();
};

Fn2();
var Fn3 = function () {
    this.a = 3;
};

Fn3.prototype = {
    a: 4,
};

var fn3 = new Fn3();
Fn1.call(fn3);

export default router;