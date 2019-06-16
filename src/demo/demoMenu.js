const demoMenu = [
    {
        path: '/',
        name: 'Demo',
        iconCls: 'fa fa-bar-chart',
        children: [
            { iconCls: '', path: '/vuex', name: 'Vuex' }
            ,{ iconCls: '', path: '/echarts',  name: 'Echarts'}
            ,{ iconCls: '', path: '/table', name: 'Table' }
            ,{ iconCls: '', path: '/form',  name: 'Form' }
        ]
    }
];

export default demoMenu;