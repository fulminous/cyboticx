"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
/**
 * Helper hook for useLocation search query
 * @returns URLSearchParams
 */
var useQuery = function () {
    return new URLSearchParams((0, react_router_dom_1.useLocation)().search);
};
exports.default = useQuery;
