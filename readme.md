#A FMiscLib library by Fadeoc, with self usage functions.

version: 0.1.1.0006

Function Lists:
* (chrome | ie8-ie11 )copyToClipboard: to copy text into clipboard.
* ensureObjectProperty: to ensure object has property in deep layer.
* mapUrlParams: to convert url params into map.
* textareaLimiting: to limit the amout of chars user could input.

###1. textareaLimiting

to limit chars in textarea. any textarea (basically any element with an ID ) will be forced only contains certain limits amount of chars.
    
###2. mapUrlParams

to convert url params into map

@params {searchUrl} searchUrl - window.location.search

@return {object} param:value - all param:value pairs in searchUrl, if none param exists, return {}

###3. ensureObjectProperty

to ensure object has property in deep layer, to avoid silly "can not read property of undefined".

@params {String} getPropStr - whole string include obj, eg: to test if a has b as property, should be "a.b" or "a[b]".
@params {object} getFromObj - obj to test, should be a as above example.
@params {object} varInProp - key {string}: vars in your getPropStr; val {any}: val of the key. eg: say you have an i in your getPropStr represents an i in iteration, send in {"i", i}, so the lib will recogonize the i in your getPropStr is a variable instead of a property string. 

Test cases: 5