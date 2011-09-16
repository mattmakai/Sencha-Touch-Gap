Ext.setup({
    onReady: function() {

	Ext.apply(Ext.data.validations, {

		checkdateMessage: 'date is not within the allowed range',

		checkdate: function(config, value) {
			if (value === undefined) {
				return false;
			}

			var graceDays = Ext.isEmpty(config.grace) ? 1 : config.grace;

			var date = Date.parseDate(value, 'd-m-Y');
			var currDate = new Date();
			currDate.clearTime();
			if (date.between(currDate, currDate.add(Date.DAY, graceDays)))
				return true;
			else
				return false;

		}
	});

 	Ext.regModel('User', {
	    fields: [
	        {name: 'name',  type: 'string'},
	        {name: 'age',   type: 'int'},
	        {name: 'phone', type: 'string'},
	        {name: 'email', type: 'string'},
	        {name: 'effectiveDate', type: 'string'},	//format d-m-Y
	        {name: 'alive', type: 'boolean', defaultValue: true}
	    ],
	    validations: [
	        {type: 'presence',  field: 'age'},
	        {type: 'length',    field: 'name',     min: 2},
	        {type: 'checkdate', field: 'effectiveDate',   grace: 2}
	    ]
	});

	var user = Ext.ModelMgr.create({
	    name : '',
	    phone: '555-555-5555',
	    email: 'ajit.kumar@walkingtree.in',
	    effectiveDate: '23-07-2011'
	}, 'User');

	var errors = user.validate();
	if (!errors.isValid()) {
		var errStr = '';
		Ext.each(errors.items, function(error, index, allErrors){
			errStr += error.field + ' : ' + error.message + '\n';
		});
		alert(errStr);
	}
	}
});
