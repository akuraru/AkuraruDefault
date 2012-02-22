var Ak = {};
Ti.include('UI/window1.js');
Ti.include('UI/window2.js');
Ti.include('UI/tabGroup.js');

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Ak.createTabGroup();

// open tab group
tabGroup.open();


