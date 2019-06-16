import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})


router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('menuList');
        sessionStorage.removeItem('roleList');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));

    if (!user && to.path !== '/login') {
        next({ path: '/login' })
    } else {
        if (to.path) {
            next()
        } else {
            next({ path: '/404' })
        }
    }
});

export default router;