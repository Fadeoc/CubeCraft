var ensureObjectProperty = function(getPropStr, getFromObj) {
	//type error
	if (typeof getPropStr !== 'string') {
		return false;
	}
	//length error
	if (getPropStr.length === 0) {
		return false;
	}
	//convert all property chain into Array
	var testDotArr = getPropStr.replace(new RegExp(/\[/, 'g'), '.').replace(new RegExp(/\]/, 'g'), '').split('.');
	//dealing via length of Array
	var testDotArrLength = testDotArr.length;
	//no property was sent
	if (testDotArrLength === 1) {
		return false;
	}
	//now let us begin :)
	var nowObj = getFromObj;
	for (var i = 1; i < testDotArrLength; i++) {
		var nowKey = testDotArr[i];
		if (nowObj !== null && nowObj.hasOwnProperty(nowKey)) {
			if (i === testDotArrLength - 1) {
				return true;
			}
			else {
				nowObj = nowObj[nowKey];
			}
		}
		else {
			return false;
		}
	}
};

//enable this line below to test mod
// export default ensureObjectProperty;