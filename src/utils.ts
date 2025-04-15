type Entries<T> = [keyof T, T[keyof T]][];

export function entries<T extends object>(object: T): Entries<T> {
    return Object.entries(object) as Entries<T>;
}

export function match<T, R>(
    value: T,
    cases: [T, (caseValue: T) => R][],
    defaultCase?: (caseValue: T) => R
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

export interface HKT {
    param: unknown;
    result: unknown;
}
export type Apply<F extends HKT, X> = (F & { param: X })["result"];

type Join<K, P> = K extends string | number
    ? P extends string | number
        ? `${K}${"" extends P ? "" : "."}${P}`
        : never
    : never;

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...0[]];

type Leaves<T, D extends number = 10> = [D] extends [never]
    ? never
    : T extends object
    ? { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T]
    : "";

type PathValue<T, K extends string, D extends number = 10> = [D] extends [never]
    ? never
    : K extends `${infer Key}.${infer Rest}`
    ? Key extends keyof T
        ? PathValue<T[Key], Rest, Prev[D]>
        : never
    : K extends keyof T
    ? T[K]
    : never;

export type MappedFlatObject<T, F extends HKT> = {
    [K in Leaves<T, 6>]: Apply<F, PathValue<T, K, 6>>;
};
