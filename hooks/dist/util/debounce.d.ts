/// <reference types="node" />
declare const debounce: (n: number, fn: (...params: any[]) => any, immed?: boolean) => (this: any, ...args: any[]) => NodeJS.Timeout;
export default debounce;
