function main() {
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

	// create tab group
	var tabGroup = new (require('/app/ui/tabGroup'))();

	// open tab group
	tabGroup.open();
}

// Export
exports.main = main;
