Ext.setup({
    onReady: function() {
Ext.regModel('Contact', {
    fields: ['firstName', 'lastName']
});

var store = new Ext.data.JsonStore({
    model  : 'Contact',

    data: [
        {firstName: 'Ajit',   lastName: 'Kumar'},
        {firstName: 'Alok',   lastName: 'Ranjan'},
        {firstName: 'Pradeep',lastName: 'Lavania'},
        {firstName: 'Sunil',  lastName: 'Kumar'},
        {firstName: 'Sujit',  lastName: 'Kumar'},
        {firstName: 'Pratyush',lastName: 'Kumar'},
        {firstName: 'Piyush', lastName: 'Kumar'},
        {firstName: 'Priti', lastName: ''},
        {firstName: 'Seema',  lastName: 'Singh'},
        {firstName: 'Ayush',  lastName: 'Kumar'},
        {firstName: 'Ayush',  lastName: 'Ranjan'},
        {firstName: 'Alisha', lastName: 'Lavania'},
        {firstName: 'Deepak',   lastName: 'Sinha'},
        {firstName: 'Sheela',   lastName: 'Kejawani'},
        {firstName: 'Srikanth',    lastName: 'Reddy'},
        {firstName: 'Suman', lastName: 'Ravuri'},
        {firstName: 'Ranjit', lastName: ''},
        {firstName: 'Jay',     lastName: 'Sharma'}
    ]
});

var list = new Ext.List({
    itemTpl: '<tpl for="."><div class="contact">{firstName} <strong>{lastName}</strong></div></tpl>',

    store: store,

    floating     : true,
    width        : 350,
    height       : 370,
    centered     : true,
    modal        : true,
    hideOnMaskTap: false
});
list.show();
    }
});
