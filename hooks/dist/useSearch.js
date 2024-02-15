"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * Effect hook for handling search
 * @param query Search query
 * @param minCharactersCallback What to do when query has less than 3 chars (eg. Disable loading indicators)
 * @param searchFunction Callback containing search logic
 */
function useSearch(query, minCharactersCallback, searchFunction) {
    var _a = (0, react_1.useState)(false), finishedSearch = _a[0], setFinishedSearch = _a[1];
    (0, react_1.useEffect)(function () {
        if (finishedSearch) {
            setFinishedSearch(false);
        }
        if (query.length < 3) {
            // Disable loading indicators here
            minCharactersCallback();
            return;
        }
        var timeoutHandle = setTimeout(function () {
            searchFunction();
            setFinishedSearch(true);
        }, 500);
        return function () {
            if (timeoutHandle) {
                clearTimeout(timeoutHandle);
            }
        };
    }, [query]);
    return { finishedSearch: finishedSearch };
}
exports.default = useSearch;
