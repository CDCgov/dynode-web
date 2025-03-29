type Entries<T> = [keyof T, T[keyof T]][];

export function entries<T extends object>(object: T): Entries<T> {
    return Object.entries(object) as Entries<T>;
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
