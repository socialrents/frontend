import { createWebHistory, createRouter } from "vue-router";

const routes = [
    { path: "/", component: () => import('../components/views/HomePage.vue') },
    { path: "/login", component: () => import('../components/views/LoginPage.vue') },
    { path: "/signupOwner", component: () => import('../components/views/SignupOwner.vue') },
    { path: "/signupClient", component: () => import('../components/views/SignupClient.vue') },
    { path: "/ownerPage", component: () => import('../components/views/OwnerPage.vue') },
    { path: "/clientPage", component: () => import('../components/views/ClientPage.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router