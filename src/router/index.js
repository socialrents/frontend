import { createWebHistory, createRouter } from "vue-router";

const routes = [
    { path: "/", component: () => import('../components/views/HomePage.vue') },
    { path: "/login", component: () => import('../components/views/LoginPage.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router