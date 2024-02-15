"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if password is between 8 and 24 characters,
 * contains 1 small letter, 1 capital letter,
 * 1 number and one special character.
 * @param value string
 * @returns boolean
 */
var validatePassword = function (value) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,24}$/.test(value);
};
exports.default = validatePassword;
