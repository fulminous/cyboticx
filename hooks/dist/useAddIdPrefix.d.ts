/**
 * Prefix an ID value with '#' and up to 5 zeros
 * @example ```js
 * const addPrefix = useAddIdPrefix();
 * console.log(addPrefix(25)) // #000025
 * ```
 * @returns string
 */
export default function useAddIdPrefix(): (id: number) => string;
