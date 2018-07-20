var ensureObjectProperty = function(getPropStr, getFromObj, varInProp) {
	//type error
	if (typeof getPropStr !== 'string') {
		return false;
	}
	//length error
	if (getPropStr.length === 0) {
		return false;
	}
	//convert all property chain into Array
	var x = getPropStr.replace(/'/g, '').replace(/"/g, '').replace(new RegExp(/\[/, 'g'), '.');
	var testDotArr = getPropStr.replace(/'/g, '').replace(/"/g, '').replace(new RegExp(/\[/, 'g'), '.').replace(new RegExp(/\]/, 'g'), '').split('.');
	//dealing via length of Array
	var testDotArrLength = testDotArr.length;
	//no property was sent
	if (testDotArrLength === 1) {
		return false;
	}
	//now let us begin :)
	//get array from prop vars
	var varInPropArr = Object.keys(varInProp);
	var nowObj = getFromObj;
	for (var i = 1; i < testDotArrLength; i++) {
		var nowKey = testDotArr[i];
		// if nowKey is variable, get it is value as realkey
		if (varInPropArr.indexOf(nowKey) !== -1) {
			nowKey = varInProp[nowKey];
		}
		if (nowObj !== null && nowObj.hasOwnProperty(nowKey)) {
			if (i === testDotArrLength - 1) {
				return true;
			}
			else {
				//recursion like
				nowObj = nowObj[nowKey];
			}
		}
		else {
			return false;
		}
	}
};