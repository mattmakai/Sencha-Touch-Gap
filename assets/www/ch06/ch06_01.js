Ext.setup({
    onReady: function() {

		var buttons = [
		    {
		        text: 'Normal',
		        handler: function() {
		        	Ext.Msg.alert('Info', 'You have clicked: ' + this.text);
		        }
		    },
		    {
		        ui  : 'round',
		        text: 'Round'
		    },
		    {
		        ui  : 'small',
		        text: 'Small'
		    }
		];

		var panel = new Ext.Panel({
			fullscreen: true,
		    layout: {
		        type : 'hbox',
		        pack : 'center'
		    },
		    defaults: {
		    	xtype: 'button'
		    },
		    items: [buttons]
		});
    }
});
