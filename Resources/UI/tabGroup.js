Ak.createTabGroup = function() {
	Ti.include('Design/tabGroup.js');
	var tabGroup = Ti.UI.createTabGroup(Design.tabGroup);

	var tab1Design = Design.tab1;
	var tab2Design = Design.tab2;

	tab1Design.window = Ak.createWindow1();
	var tab1 = Ti.UI.createTab(tab1Design);
	tabGroup.addTab(tab1);

	tab2Design.window = Ak.createWindow2();
	var tab2 = Ti.UI.createTab(tab2Design);
	tabGroup.addTab(tab2);

	return tabGroup;
};
