"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debounce = function (n, fn, immed) {
    if (immed === void 0) { immed = false; }
    var timer;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer === undefined && immed) {
            fn.apply(this, args);
        }
        clearTimeout(timer);
        timer = setTimeout(function () { return fn.apply(_this, args); }, n);
        return timer;
    };
};
exports.default = debounce;
