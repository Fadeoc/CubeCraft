function mapUrlParams(searchUrl) {
	var path = searchUrl.substr(1),
			regExp = /([^&=]+)=([\w\W]*?)(&|$)/g,
			resultMap = {},
			result;
	while ((result = regExp.exec(path)) != null) {
		resultMap[result[1]] = result[2];
	}
	return resultMap;
}