var _tab;

function Window2(tab) {
	var _style = require('/app/style/window2');
	
	_tab = tab
	var win = Titanium.UI.createWindow(_style.window);

	var label = Titanium.UI.createLabel(_style.label);
	label.addEventListener('click',_openWindow2);
	win.add(label);
	
	return win;
}
function _openWindow2(){
	_tab.open(new(require('/app/ui/window2'))(_tab));
}

// Export
module.exports = Window2;