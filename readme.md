#A FMiscLib library by Fadeoc, with self usage functions.

version: 0.1.1.0006

Function Lists:
* textareaLimiting: limit the amout of chars user could input.

###1. textareaLimiting

to limit chars in textarea. any textarea (basically any element with an ID ) will be forced only contains certain limits amount of chars.
    
###2. mapUrlParams

@params {searchUrl} searchUrl - window.location.search
@return {object} param:value - all param:value pairs in searchUrl, if none param exists, return {} 