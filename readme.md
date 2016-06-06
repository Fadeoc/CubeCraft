#A FMiscLib library by Fadeoc, with self usage functions.

version: 0.1.1.0004

Function Lists:
*textareaClipping: limit the amout of chars user could input.

###1. textareaLimiting

to limit chars in textarea. any textarea (basically any element with an ID ) will be forced only contains certain limits amount of chars.

    function textareaClipping(textareaId, lengthLimit = 50000)
    // limit certain length of the input text in a textarea
    // usage: textareaClipping(textareaId:string[, lengthLimit:int])
    //          textareaId -> textarea id,
    //          lengthLimit -> chars length to limit, omit granted with default value 50000 chars.