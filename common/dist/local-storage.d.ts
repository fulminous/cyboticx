export default class LocalStorage {
    static add: <T = string>(key: string, value: T) => void;
    static read: <T = string>(key: string) => T | undefined;
    static remove: (key: string) => void;
    static addAccessToken: (token: string) => void;
    static readAccessToken: () => string | undefined;
    static removeAccessToken: () => void;
    static addRootState: <T>(state: T) => void;
    static readRootState: <T>() => T | undefined;
    static removeRootState: () => void;
}
