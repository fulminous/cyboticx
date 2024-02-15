"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeviceInfo = void 0;
var react_1 = __importDefault(require("react"));
var util_1 = require("./util");
/**
 * Get the screen width and height at any point in time
 */
var useDeviceInfo = function () {
    var getDeviceInfo = function () { return ({
        width: window.innerWidth,
        height: window.innerHeight,
        device: (0, util_1.calculateDeviceInfo)(window.innerWidth),
    }); };
    var _a = react_1.default.useState(getDeviceInfo), windowSize = _a[0], setWindowSize = _a[1];
    react_1.default.useEffect(function () {
        var handleResize = function () { return setWindowSize(getDeviceInfo()); };
        var handleResizeDebounce = (0, util_1.debounce)(100, handleResize);
        window.addEventListener('resize', handleResizeDebounce);
        return function () { return window.removeEventListener('resize', handleResizeDebounce); };
    }, []);
    return windowSize;
};
exports.useDeviceInfo = useDeviceInfo;
