Ext.define('Ux.locale.override.st.i3.plugin.PullRefresh', {
    override : 'Ext.plugin.PullRefresh',

    requires : [
        'Ux.locale.override.st.Component'
    ],

    setLocale : function(locale) {
	
		/*"lastUpdatedatedFormat"
		"lastupdatedText" 
		"loeadedText" 
		"loadingText"
		"pullRefreshText"
		"releaseRefreshText"*/
	
	
        var me                  		= this,
            locales             		= me.locales || me.getInitialConfig().locales,
            manager             		= me.locale;

		me.setAllProperties(manager, locales);
		
		//refresh
		if(manager._loaded){
			me.resetRefreshState();
		}
        me.callParent(arguments);
    }
});