import { expect, test } from "vitest";
import { inputToNumber, formatNumberToDisplay } from "./NumberInput";

test("can parse integer", () => {
    expect(inputToNumber("101", "int")).toBe(101);
});

test("can't parse malformed integer", () => {
    expect(inputToNumber("10.1", "int")).toBeInstanceOf(Error);
});

test("can parse percent", () => {
    expect(inputToNumber("10.1%", "pct")).toBeCloseTo(0.101);
});

test("format percent", () => {
    expect(formatNumberToDisplay(0.101, "pct")).toBe("10.1%");
});
