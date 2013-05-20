Ext.define('Ux.locale.override.st.i3.plugin.ListPaging', {
    override : 'Ext.plugin.ListPaging',

    requires : [
        'Ux.locale.override.st.Component'
    ],


    setLocale : function(locale) {
        var me                  		= this,
            locales             		= me.locales || me.getInitialConfig().locales,
            manager             		= me.locale;

        //loadMoreText
        //noMoreRecordsText 
		me.setAllProperties(manager, locales);
		//refresh
		if(manager._loaded  && this.getList()){
			me.onStoreLoad(this.getList().getStore());
		}
		
        me.callParent(arguments);
    }
});