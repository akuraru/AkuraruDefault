var _style;

function TabGroup() {
	var tabGroup = Ti.UI.createTabGroup(_style.tabGroup);

	var tab1 = Ti.UI.createTab(_style.tab1);
	tab1.window = new (require('/app/ui/window1'))();
	tabGroup.addTab(tab1);

	var tab2 = Ti.UI.createTab(_style.tab2);
	tab2.window = new (require('/app/ui/window2'))(tab2);
	tabGroup.addTab(tab2);

	return tabGroup;
};

_style = {};

_style.tabGroup = {};

_style.tab1 = {  
    icon:'KS_nav_views.png',
    title:'Tab 1',
};

_style.tab2 = {  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
};

// Export
module.exports = TabGroup;