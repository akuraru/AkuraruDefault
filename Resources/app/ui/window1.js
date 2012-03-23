var _style;

function Window1() {
	var win = Ti.UI.createWindow(_style.window);
	
	var label = Ti.UI.createLabel(_style.label);
	win.add(label);
	
	return win;
}

_style = {};

_style.window = {
	title : 'Tab 1',
	backgroundColor : '#fff'
}

_style.label = {
	color : '#999',
	text : L('label1'),
	font : {
		fontSize : 20,
		fontFamily : 'Helvetica Neue'
	},
	textAlign : 'center',
	width : 'auto'
}

// Export
module.exports = Window1;