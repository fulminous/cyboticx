"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate Email Address
 * @param email
 * @returns boolean
 */
var validateEmail = function (email) {
    return new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
};
exports.default = validateEmail;
