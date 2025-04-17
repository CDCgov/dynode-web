type Entries<T> = [keyof T, T[keyof T]][];

export function entries<T extends object>(object: T): Entries<T> {
    return Object.entries(object) as Entries<T>;
}

export function match<T, R>(
    value: T,
    cases: [T, (caseValue: T) => R][],
    defaultCase?: (caseValue: T) => R,
): R {
    for (const [caseValue, action] of cases) {
        if (value === caseValue) {
            return action(caseValue);
        }
    }
    if (!defaultCase) {
        throw new Error(`No matching case for value: ${value}`);
    }
    return defaultCase(value);
}

export function getUrlParam(param: string): string | null {
    let queryParams = new URLSearchParams(window.location.search);
    return queryParams.get(param);
}

export interface HKT {
    param: unknown;
    result: unknown;
}
export type Apply<F extends HKT, X> = (F & { param: X })["result"];

// Join two keys with dot notation
type Join<K, P> = K extends string | number
    ? P extends string | number
        ? `${K}${"" extends P ? "" : "."}${P}`
        : never
    : never;

// Recursion depth limiter up to 5 (can be extended)
type Prev = [never, 0, 1, 2, 3, 4, 5];

// Determines if T is a plain object (not array/function/null)
type IsPlainObject<T> = T extends object
    ? // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
      T extends Function
        ? false
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          T extends readonly any[]
          ? false
          : true
    : false;

// Get all dot-separated leaf paths of object T up to depth D
type Leaves<T, D extends number = 5> = [D] extends [never]
    ? never
    : IsPlainObject<T> extends true
      ? {
            [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>>;
        }[keyof T]
      : "";

// Resolve value at path `K` from object `T`, using dot-separated keys
type PathValue<T, K extends string, D extends number = 5> = [D] extends [never]
    ? never
    : K extends `${infer Key}.${infer Rest}`
      ? Key extends keyof T
          ? PathValue<T[Key], Rest, Prev[D]>
          : never
      : K extends keyof T
        ? T[K]
        : never;

// Final utility: flatten `T`, apply HKT `F` to each leaf value
export type MappedFlatObject<T, F extends HKT> = {
    [K in Leaves<T>]: Apply<F, PathValue<T, K>>;
};

if (import.meta.vitest) {
    const { test, expect } = import.meta.vitest;
    test("entries", () => {
        type Key = "a" | "b";
        type Obj = Record<Key, number>;
        const obj: Obj = { a: 1, b: 2 };
        Object.entries(obj).forEach(([key]) => {
            // @ts-expect-error: Typescript casts the wrong type
            let k: Key = key;
            expect(k).toBe(key);
        });
        entries(obj).forEach(([key, value]) => {
            let k: Key = key;
            expect(k).toBe(key);
            expect(value).toBe(obj[key]);
        });
    });
}
