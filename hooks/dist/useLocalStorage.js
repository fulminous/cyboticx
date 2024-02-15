"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStorage = void 0;
var react_1 = require("react");
/**
 * Local Storage Hook
 * @param key
 * @param initialValue
 * @example ```js
 * const [counter, setCounter] = useLocalStorage('counter', 100);
 * console.log(counter) // 100
 * ```
 * @See https://usehooks-typescript.com/react-hook/use-local-storage
 */
function useLocalStorage(key, initialValue) {
    // Get from local storage then
    // parse stored json or return initialValue
    var readValue = function () {
        // Prevent build error "window is undefined" but keep keep working
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            var item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            console.warn("Error reading localStorage key \"" + key + "\":", error);
            return initialValue;
        }
    };
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    var _a = (0, react_1.useState)(readValue), storedValue = _a[0], setStoredValue = _a[1];
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    var setValue = function (value) {
        // Prevent build error "window is undefined" but keep keep working
        if (typeof window === 'undefined') {
            console.warn("Tried setting localStorage key \"" + key + "\" even though environment is not a client");
        }
        try {
            // Allow value to be a function so we have the same API as useState
            var newValue = value instanceof Function ? value(storedValue) : value;
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(newValue));
            // Save state
            setStoredValue(newValue);
            // We dispatch a custom event so every useLocalStorage hook are notified
            window.dispatchEvent(new Event('local-storage'));
        }
        catch (error) {
            console.warn("Error setting localStorage key \"" + key + "\":", error);
        }
    };
    // Read latest value from LocalStorage on hook mount
    (0, react_1.useEffect)(function () {
        setStoredValue(readValue());
    }, []);
    // Keep all instances hook sync
    (0, react_1.useEffect)(function () {
        var handleStorageChange = function () {
            setStoredValue(readValue());
        };
        // this only works for other documents, not the current one
        window.addEventListener('storage', handleStorageChange);
        // this is a custom event, triggered in writeValueToLocalStorage
        window.addEventListener('local-storage', handleStorageChange);
        return function () {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('local-storage', handleStorageChange);
        };
    }, []);
    return [storedValue, setValue];
}
exports.useLocalStorage = useLocalStorage;
