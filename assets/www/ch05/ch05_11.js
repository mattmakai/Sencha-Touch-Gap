Ext.setup({
    onReady: function() {

 	Ext.regModel('User', {
	    fields: [
	        {name: 'name',  type: 'string'},
	        {name: 'age',   type: 'int'},
	        {name: 'phone', type: 'string'},
	        {name: 'email', type: 'string'},
	        {name: 'alive', type: 'boolean', defaultValue: true}
	    ]
	});

	var data = {users: [{
			id: 1,
		    name : 'Ajit Kumar',
		    age  : 32,
		    phone: '555-555-5555',
		    email: 'ajit@walkingtree.in'
		}, {
			id: 2,
		    name : 'Alok Ranjan',
		    age  : 32,
		    phone: '123-456-7890',
		    email: 'alok@walkingtree.in'
		}, {
			id: 3,
		    name : 'Pradeep Lavania',
		    age  : 34,
		    phone: '987-654-3210',
		    email: 'pradeep@walkingtree.in'
		}]
	};

	var store = new Ext.data.Store({
	    model: 'User',
	    autoLoad: true,
	    data: data,
	    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'users'
        }
    	}
	});

    var form;

    var formBase = {
        scroll: 'vertical',
        items: [{
                    xtype: 'selectfield',
                    name : 'user',
                    label: 'User',
                    store: store,
                    valueField: 'name',
                    displayField: 'name'
                }]
    };

    if (Ext.is.Phone) {
        formBase.fullscreen = true;
    } else {
        Ext.apply(formBase, {
            autoRender: true,
            floating: true,
            modal: true,
            centered: true,
            hideOnMaskTap: false,
            height: 385,
            width: 480
        });
    }

    form = new Ext.form.FormPanel(formBase);
    form.show();
    }
});
