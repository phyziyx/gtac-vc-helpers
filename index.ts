/**
 *
 */
function showHelpMessage(message) {
	gta.setCustomText("M_ANN", message);
	natives.PRINT_HELP("M_ANN");
}

/**
 *
 */
function isSafeGameText(message) {
	let tildeCount = 0;
	let tildePosition = -1;
	for (let i = 0, j = message.length; i < j; i ++) {
		if (message[i] === '~') {
			tildeCount ++;
			tilePosition = i;
		}
	}
	return tildeCount % 2 == 0 || tildePosition < 255;
}
