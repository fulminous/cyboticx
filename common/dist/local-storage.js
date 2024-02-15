"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ACCESS_TOKEN_KEY = 'accessToken';
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
    }
    LocalStorage.add = function (key, value) {
        if (typeof value === 'string') {
        }
        localStorage.setItem(key, JSON.stringify(value));
    };
    LocalStorage.read = function (key) {
        var item = localStorage.getItem(key);
        if (!item)
            return undefined;
        return JSON.parse(item);
    };
    LocalStorage.remove = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorage.addAccessToken = function (token) {
        LocalStorage.add(ACCESS_TOKEN_KEY, token);
    };
    LocalStorage.readAccessToken = function () {
        return LocalStorage.read(ACCESS_TOKEN_KEY);
    };
    LocalStorage.removeAccessToken = function () {
        LocalStorage.remove(ACCESS_TOKEN_KEY);
    };
    LocalStorage.addRootState = function (state) {
        LocalStorage.add('state', state);
    };
    LocalStorage.readRootState = function () {
        return LocalStorage.read('state');
    };
    LocalStorage.removeRootState = function () {
        LocalStorage.remove('state');
    };
    return LocalStorage;
}());
exports.default = LocalStorage;
