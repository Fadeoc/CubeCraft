/**
 * @method copyToClipboard - copy text to clipboard
 * @param {string} textToCopy - the text to copy
 * @return void
 * @author https://github.com/Fadeoc
 */

var copyToClipboard = function (textToCopy) {
	//for ie8-ie11
	if( window.clipboardData && window.clipboardData.setData ) {
		window.clipboardData.setData("Text", textToCopy);
	}
	//for not-ie
	else {
		document.addEventListener('copy', function(e) {
			e.clipboardData.setData('text', textToCopy);
			e.preventDefault();
		});
		document.execCommand('copy');
	}
};