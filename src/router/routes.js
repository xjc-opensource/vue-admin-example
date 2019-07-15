import {demoRoutes} from '../demo/demoRoutes'

let routes = [
    {path: '/login', component:resolve => {require(['../views/Login.vue'], resolve)}}
    ,{path: '/404', component:resolve => {require(['../views/404.vue'], resolve)} }
    ,{path: '/home', component:resolve => {require(['../views/Home.vue'], resolve)}}
    ,{path: '*', redirect: { path: '/404'}}
    ,{
        path: '/',
        component: resolve => {require(['../views/Home.vue'], resolve)},
        name: 'Demo',
        children: demoRoutes
    }
    ,{
        path: '/',
        component: resolve => {require(['../views/Home.vue'], resolve)} ,
        name: '',
        children: [
            { path: '/index/main', component: resolve => {require(['../views/Main.vue'],resolve)}, name: 'main'}
        ]
    }
];

export default routes;