Object.keys = Object.keys || function (o) {
	var keysArray = [];
	for (var key in o) {
		keysArray.push(key);
	}
	return keysArray;
};

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
	var testDotArr = getPropStr.replace(/'|"|]/g, '').replace(/\[/g, '.').split('.');
	//dealing via length of Array
	var testDotArrLength = testDotArr.length;
	//no property was sent
	if (testDotArrLength === 1) {
		return false;
	}
	//now let us begin :)
	var nowObj = getFromObj;
	if (varInProp !== null && typeof varInProp === 'object'&& Object.keys(varInProp).length !== 0) {
		//get array from prop vars
		var varInPropArr = Object.keys(varInProp);
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
	}
	//duplicate code blocks to avoid condition judges in for loop
	else {
		for (var i = 1; i < testDotArrLength; i++) {
			var nowKey = testDotArr[i];
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
	}
};

//enable this line below to test mod
export default ensureObjectProperty;