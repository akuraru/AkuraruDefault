Ak.createWindow2 = function() {
	Ti.include('Design/window2.js')
	var win = Titanium.UI.createWindow(Design.window);

	var label = Titanium.UI.createLabel(Design.label);
	win.add(label);
	
	return win;
}