Ext.setup({
    onReady: function() {

 	Ext.regModel('User', {
	    fields: [
	        {name: 'id',  type: 'int'},
	        {name: 'name',  type: 'string'},
	        {name: 'age',   type: 'int'},
	        {name: 'phone', type: 'string'},
	        {name: 'email', type: 'string'},
	        {name: 'alive', type: 'boolean', defaultValue: true}

	    ],
	    hasMany: {model: 'Address', name: 'addresses'},
	    proxy: {
	        type: 'sessionstorage',
	        id : '5443ch05sessionkey'
    	}
	});

	Ext.regModel('Address', {
	    fields: ['id', 'line1', 'line2', 'zipcode', 'state', 'country'],

	    belongsTo: 'User'
	});


	var user = Ext.ModelMgr.create({
	id: 1,
    name : 'Ajit Kumar',
    age  : 24,
    phone: '555-555-5555',
    email: 'ajit.kumar@walkingtree.in',
    addresses: [{
    	id: 1,
    	line1: 'Flat# 101, Plot# 101, Elegance Apartment',
    	line2: 'New SBH Colony, East Maredpally, Hyderabad',
    	zipcode: '500023',
    	state: 'AP',
    	country: 'India'
    }, {
    	id: 2,
    	line1: 'Janapriya Utopia',
    	line2: 'Hyderguda, Hyderabad',
    	zipcode: '500081',
    	state: 'AP',
    	country: 'India'
    }]
	}, 'User');

//save the model
	user.save({
    success: function() {
        console.log('The User was saved');
    }});

//load model from the storage
    User = Ext.ModelMgr.getModel('User');
    User.load(1, {
    success: function(record, operation) {
        console.log('The User was loaded');
        alert('Name: ' + record.get('name') + ' : Addresses : ' + record.get('addresses').length);
    }});
	}

});
