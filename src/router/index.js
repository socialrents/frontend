import { createWebHistory, createRouter } from "vue-router";

const routes = [
    { path: "/", component: () => import('../components/views/HomePage.vue')},
    { path: "/editUser", component: () => import('../components/EditUserForm.vue')},
    { path: "/login", component: () => import('../components/views/LoginPage.vue')},
    { path: "/signupOwner", component: () => import('../components/views/pages/owner/SignupOwner.vue')},
    { path: "/signupClient", component: () => import('../components/views/pages/client/SignupClient.vue')},
    { path: "/ownerPage", component: () => import('../components/views/pages/owner/OwnerPage.vue')},
    { path: "/notifications", component: () => import('../components/views/pages/owner/NotificationsPage.vue')},
    { path: "/houses", component: () => import('../components/views/pages/owner/HousesPage.vue')},
    { path: "/newHouse", component: () => import('../components/views/pages/owner/forms/NewHouseForm.vue')},
    { path: "/clientPage", component: () => import('../components/views/pages/client/ClientPage.vue')},
    { path: "/newParty", component: () => import('../components/views/pages/client/forms/NewPartyForm.vue')},
    { path: "/allPlaces/:city/:nOfDays", component: () => import('../components/views/pages/client/forms/SelectPlace.vue')}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const publicPages = ['/', '/login', '/signupClient', '/signupOwner'];

router.beforeEach((to, from, next) => {
    const isPublicPage = publicPages.includes(to.path);
    const authenticate = sessionStorage.getItem('socialrents-loggedIn');
    console.log(authenticate);
    if (isPublicPage || authenticate === 'true' ) {
        next();
    } else {
        next('/login');
    }
});

export default router