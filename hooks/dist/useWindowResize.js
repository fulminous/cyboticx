"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowResize = void 0;
var react_1 = __importDefault(require("react"));
var util_1 = require("./util");
/**
 * Get the screen width and height at any point in time
 */
var useWindowResize = function () {
    var getWindowSize = function () { return ({
        width: window.innerWidth,
        height: window.innerHeight,
        isSmallDevice: window.innerWidth <= 768,
        isSmallerDevice: window.innerWidth <= 480,
        // Tailwind CSS Breakpoints
        isXXS: window.innerWidth < 375,
        isXS: window.innerWidth >= 375 && window.innerWidth < 640,
        isSM: window.innerWidth >= 640 && window.innerWidth < 768,
        isMD: window.innerWidth >= 768 && window.innerWidth < 1024,
        isLG: window.innerWidth >= 1024 && window.innerWidth < 1280,
        isXL: window.innerWidth >= 1280,
    }); };
    var _a = react_1.default.useState(getWindowSize), windowSize = _a[0], setWindowSize = _a[1];
    react_1.default.useEffect(function () {
        var handleResize = function () { return setWindowSize(getWindowSize()); };
        var handleResizeDebounce = (0, util_1.debounce)(100, handleResize);
        window.addEventListener('resize', handleResizeDebounce);
        return function () { return window.removeEventListener('resize', handleResizeDebounce); };
    }, []);
    return windowSize;
};
exports.useWindowResize = useWindowResize;
