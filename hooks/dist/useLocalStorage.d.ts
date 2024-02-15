declare type LocalStorageReturnType<T> = [T, (value: T) => void];
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
export declare function useLocalStorage<T>(key: string, initialValue: T): LocalStorageReturnType<T>;
export {};
