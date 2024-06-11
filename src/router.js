import { createRouter, createWebHistory } from 'vue-router';

import Home from './Pages/Home.vue';
import ListProject from './Pages/ListProject.vue';
import SingleProject from './Pages/SingleProject.vue';

const router = createRouter({	
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/list-project',
            name: 'list-project',
            component: ListProject
        },
        {
            path: '/project/:slug',
            name: 'single-project',
            component: SingleProject
        }

    ]
});

export { router };