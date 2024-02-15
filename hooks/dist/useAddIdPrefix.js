"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Prefix an ID value with '#' and up to 5 zeros
 * @example ```js
 * const addPrefix = useAddIdPrefix();
 * console.log(addPrefix(25)) // #000025
 * ```
 * @returns string
 */
function useAddIdPrefix() {
    return function (id) {
        if (id <= 9)
            return "#00000" + id;
        if (id >= 10 && id <= 99)
            return "#0000" + id;
        if (id >= 100 && id <= 999)
            return "#000" + id;
        if (id >= 1000 && id <= 9999)
            return "#00" + id;
        if (id >= 10000 && id <= 99999)
            return "#0" + id;
        else
            return "#" + id;
    };
}
exports.default = useAddIdPrefix;
