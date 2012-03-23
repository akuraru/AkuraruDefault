var _style,_tab;

function Window2(tab) {
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

_style = {};

_style.window = {
	title : 'Tab 2',
	backgroundColor : '#fff'
}

_style.label = {
	color : '#999',
	text : L('label2'),
	font : {
		fontSize : 20,
		fontFamily : 'Helvetica Neue'
	},
	textAlign : 'center',
	width : 'auto'
}

// Export
module.exports = Window2;