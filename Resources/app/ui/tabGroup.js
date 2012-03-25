function TabGroup() {
	var _style = require('/app/style/tabGroup');
	
	var tabGroup = Ti.UI.createTabGroup(_style.tabGroup);

	var tab1 = Ti.UI.createTab(_style.tab1);
	tab1.window = new (require('/app/ui/window1'))();
	tabGroup.addTab(tab1);

	var tab2 = Ti.UI.createTab(_style.tab2);
	tab2.window = new (require('/app/ui/window2'))(tab2);
	tabGroup.addTab(tab2);

	return tabGroup;
};

// Export
module.exports = TabGroup;