import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import DashboardPage from '../views/DashboardPage.vue';
import RegisterPage from '../views/RegisterPage.vue';

const routes = [
    { path: '/', redirect: '/login' },
    {
        path: '/login',
        name: "Login",
        component: LoginPage
    },
    { path: '/dashboard', name: "Dashboard", component: DashboardPage, meta: { requiresAuth: true } },
    { path: '/register', name: "Register", component: RegisterPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Route Guard (jika ingin melindungi route)
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const token = localStorage.getItem('access_token');

        // Cek apakah token ada dan valid
        if (!token || !isValidToken(token)) {
            next({ name: 'LoginPage' }); // Redirect ke login jika token tidak valid
        } else {
            next(); // Lanjutkan ke route yang diminta
        }
    } else {
        next(); // Lanjutkan jika tidak memerlukan otentikasi
    }
});

function isValidToken(token) {
    try {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        return decoded.exp > Date.now() / 1000;
    } catch (error) {
        return false;
    }
}

export default router;