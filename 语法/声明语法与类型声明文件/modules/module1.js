"use strict";
exports.__esModule = true;
exports.sayMessage = exports.msg = void 0;
exports.msg = 'hello messge';
function sayMessage(words) {
    exports.msg = words;
    console.log(exports.msg);
    return exports.msg;
}
exports.sayMessage = sayMessage;
