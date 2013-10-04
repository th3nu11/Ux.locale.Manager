Ext.define('Ux.locale.override.st.Component', {
    override : 'Ext.Component',

    requires : [
        'Ux.locale.Manager'
    ],

    enableLocale : false,
    locale       : null,
    locales      : null,
	autoLocale : true,
    constructor : function(config) {
        var me = this;

        config = Ux.locale.Manager.isLocalable(me, config);

        me.callParent([config]);

        if (me.enableLocale) {
            me.setLocale(Ux.locale.Manager.getLanguage());
        }
    },

    setLocale : function(locale) {
        var me          = this,
            locales     = me.locales || me.getInitialConfig().locales,
            html        = locales.html,
            manager     = me.locale,
            defaultText = '';
		
        /*if (html) {
            if (Ext.isObject(html)) {
                defaultText = html.defaultText;
                html        = html.key;
            }

            html = manager.get(html, defaultText);

            if (Ext.isString(html)) {
                me.setHtml(html);
            }
        }*/
		if(me.autoLocale){
			me.setAllProperties(manager, locales);
		}
    },
	/*** I3 ***/
	setAllProperties : function(manager, locales){
		for(var key in locales){
			this.setPropText (manager, locales, key);
		
		}
	},
	setPropText : function (manager, locales, propName){
		var me = this;
		var textKey = locales[propName];
		var defaultText = '';
		if(textKey){
			if (Ext.isObject(textKey)) {
                defaultText = textKey.defaultText;
                textKey = textKey.key;
            }
			var text = manager.get(textKey, defaultText);
			
			try{
				if (Ext.isString(text)) {
					if(manager._loaded && Ext.isEmpty(text)){
						console.error("[Component " + me.config.itemId + " - " + me.xtype + "] - Translation empty for language (" + manager._language + "), key: " + textKey);
					}
					var methodName = "me.set" + Ext.String.capitalize(propName + '');
					eval(methodName + '(text);') ;
				}
			} catch(e){
				console.error("[Component " + me.config.itemId + " - " + me.xtype + "] - Error on translation: " + e.message);
			}
		}
	}
	/*** I3 ***/
});
