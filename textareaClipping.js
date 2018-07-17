// limit certain length of the input text in a textarea
// usage: textareaClipping(textareaId:string[, lengthLimit:int])
//          textareaId -> textarea id,
//          lengthLimit -> chars length to limit, omit granted with default value 50000 chars.
function textareaClipping (textareaId, lengthLimit = 50000) {
	var textarea = document.getElementById(textareaId) || "";
	if (textarea !== "") {
		var len = lengthLimit;

		function limitChars () {
			if (textarea.value.length > len) {
				textarea.value = textarea.value.substr(0, len);
			}
		}

		(len)
		textarea.addEventListener("click", limitChars);
		textarea.addEventListener("keyup", limitChars);
		textarea.addEventListener("keydown", limitChars);
	}
}