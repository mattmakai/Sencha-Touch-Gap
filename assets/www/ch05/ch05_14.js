Ext.setup({
    onReady: function() {


 	Ext.regModel('SearchResult', {
	    fields: [
	        {name: 'kind',  type: 'string'},
	        {name: 'title',   type: 'string'},
	        {name: 'htmlTitle', type: 'string'},
	        {name: 'displayLink', type: 'string'},
	        {name: 'snippet', type: 'boolean', defaultValue: true}
	    ]
	});

	var store = new Ext.data.Store({
	    model: 'SearchResult',
	    autoLoad: true,
	    proxy: {
        type: 'scripttag',
        url: 'https://www.googleapis.com/customsearch/v1?key=' + 'AIzaSyD8nxb7bFwURb6gXqHWz9dFMQw8-bZCvPw' + '&cx=013036536707430787589:_pqjad5hr1a&q=rose',
        reader: {
            type: 'json',
            root: 'items'
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
                    valueField: 'title',
                    displayField: 'title'
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
