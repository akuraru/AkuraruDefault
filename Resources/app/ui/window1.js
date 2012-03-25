function Window1() {
	var _style = require('/app/style/window1');
	
	var win = Ti.UI.createWindow(_style.window);
	
	var label = Ti.UI.createLabel(_style.label);
	win.add(label);
	
	return win;
}

// Export
module.exports = Window1;