"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculateDeviceInfo = function (width) {
    if (width <= 768) {
        return {
            isMobile: true,
            isTablet: false,
            isDesktop: false,
            type: "mobile"
        };
    }
    if (width <= 1024) {
        return {
            isMobile: false,
            isTablet: true,
            isDesktop: false,
            type: "tablet"
        };
    }
    return {
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        type: "desktop"
    };
};
exports.default = calculateDeviceInfo;
