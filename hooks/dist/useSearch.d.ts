/**
 * Effect hook for handling search
 * @param query Search query
 * @param minCharactersCallback What to do when query has less than 3 chars (eg. Disable loading indicators)
 * @param searchFunction Callback containing search logic
 */
export default function useSearch(query: string, minCharactersCallback: () => void, searchFunction: (...args: any[]) => void): {
    finishedSearch: boolean;
};
