export const demoRoutes = [
     { path: '/vuex', component: resolve => {require(['./views/vuex.vue'], resolve)}, name: 'Vuex' }
    ,{ path: '/echarts', component: resolve => {require(['./views/echarts.vue'], resolve)} , name: 'Echarts' }
    ,{ path: '/table', component: resolve => {require(['./views/table.vue'], resolve)}, name: 'Table' }
    ,{ path: '/form', component: resolve => {require(['./views/form.vue'], resolve)}, name: 'Form' }
];
