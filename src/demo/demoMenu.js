const demoMenu = [
    {
        path: '/',
        name: 'Demo',
        iconCls: 'fa fa-html5',
        children: [
            { iconCls: 'fa fa-bell', path: '/vuex', name: 'Vuex' }
            ,{ iconCls: 'fa fa-bar-chart', path: '/echarts',  name: 'Echarts'}
            ,{ iconCls: 'fa fa-table', path: '/table', name: 'Table' }
            ,{ iconCls: 'fa fa-file-o', path: '/form',  name: 'Form' }
        ]
    }
];

export default demoMenu;