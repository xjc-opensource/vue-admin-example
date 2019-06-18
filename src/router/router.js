import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Session from '../core/session'

Vue.use(VueRouter);
const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        Session.deleteSession();
    }
    let isAuthSession = Session.isAuthSession();
    if (!isAuthSession && to.path !== '/login') {
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