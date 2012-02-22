Ak.createWindow1 = function() {
	Ti.include('Design/window1.js');
	
	var win = Ti.UI.createWindow(Design.window);
	
	var label = Ti.UI.createLabel(Design.label);
	win.add(label);
	
	return win;
}