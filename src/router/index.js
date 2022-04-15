import { createWebHistory, createRouter } from "vue-router";

const routes = [
    { path: "/", component: () => import('../components/views/HomePage.vue') },
    { path: "/login", component: () => import('../components/views/LoginPage.vue') },
    { path: "/signupOwner", component: () => import('../components/views/pages/owner/SignupOwner.vue') },
    { path: "/signupClient", component: () => import('../components/views/pages/client/SignupClient.vue') },
    { path: "/ownerPage", component: () => import('../components/views/pages/owner/OwnerPage.vue') },
    { path: "/clientPage", component: () => import('../components/views/pages/client/ClientPage.vue') },
    { path: "/newParty", component: () => import('../components/views/pages/client/forms/NewPartyForm.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router