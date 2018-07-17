#A FMiscLib library by Fadeoc, with self usage functions.

version: 0.1.1.0006

Function Lists:\
* ensureObjectProperty: to ensure object has property in deep layer.
* mapUrlParams: to convert url params into map.
* textareaLimiting: limit the amout of chars user could input.

###1. textareaLimiting

to limit chars in textarea. any textarea (basically any element with an ID ) will be forced only contains certain limits amount of chars.
    
###2. mapUrlParams

to convert url params into map

@params {searchUrl} searchUrl - window.location.search

@return {object} param:value - all param:value pairs in searchUrl, if none param exists, return {}

###3. ensureObjectProperty

to ensure object has property in deep layer, to avoid silly "can not read property of undefined".

@params {String} getPropStr - whole string include obj, eg: to test if a has b as property, should be "a.b" or "a[b]".

@return {object} getFromObj - obj to test, should be a as above example.

Test cases: 5