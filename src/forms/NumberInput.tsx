import { useEffect, useState, useRef } from "react";
import "./NumberInput.css";
type NumberType = "float" | "int";

function inputToNumber(input: string, numberType: NumberType): number | Error {
    if (!/^[\d\s.,]+$/.test(input)) {
        return new Error("Invalid characters in input.");
    }
    let normalized = input.replace(/\s+/g, "").replace(/,/g, "");

    if (numberType == "int" && normalized.includes(".")) {
        return new Error("Integers should not contain a decimal point.");
    }

    let number =
        numberType === "int"
            ? parseInt(normalized, 10)
            : parseFloat(normalized);

    return isNaN(number) ? new Error("Invalid number format.") : number;
}

function formatNumberToDisplay(num: number, numberType: NumberType) {
    return numberType === "float"
        ? num.toLocaleString("en-US", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 20,
          })
        : num.toLocaleString("en-US");
}

interface NumberInputProps {
    numberType?: "float" | "int";
    range?: boolean;
    min?: number;
    max?: number;
    step?: number;
    value: number;
    onValue: (val: number) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({
    value,
    onValue,
    range,
    min,
    max,
    step,
    numberType = "float",
    ...otherProps
}) => {
    const [parsedInternal, setParsedInternal] = useState<number | null>(null);
    const [formattedVal, setFormattedVal] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (value !== parsedInternal) {
            setParsedInternal(value);
            setFormattedVal(formatNumberToDisplay(value, numberType));
        }
    }, [value, numberType]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.setCustomValidity(errorMessage);
        }
    }, [errorMessage]);

    const handleParsing = (input: string) => {
        let parsed = inputToNumber(input, numberType);
        if (parsed instanceof Error) {
            setParsedInternal(null);
            setFormattedVal(input);
            setErrorMessage(parsed.message);
        } else {
            // Check if the value actually changed
            if (value !== parsed) {
                onValue(parsed);
            }
            setParsedInternal(parsed);
            setFormattedVal(formatNumberToDisplay(parsed, numberType));
            setErrorMessage("");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormattedVal(e.target.value);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(
            () => handleParsing(e.target.value),
            2000
        );
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        handleParsing(e.target.value);
    };

    let rangeInputProps: RangeInputProps | null = null;
    if (range) {
        if (min === undefined || max === undefined) {
            console.error("Range input requires min and max props.");
        } else {
            rangeInputProps = {
                value: value,
                onValue,
                min,
                max,
                step,
            };
        }
    }

    return (
        <div className="number-input-wrapper">
            {rangeInputProps ? (
                <RangeInput ref={inputRef} {...rangeInputProps} />
            ) : (
                <>
                    <input
                        ref={inputRef}
                        value={formattedVal}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        {...otherProps}
                    />
                    <div className="number-input-save">
                        <button onClick={(e) => e.preventDefault()}>
                            Save
                        </button>
                    </div>
                    <span className="input-error">{errorMessage}</span>
                </>
            )}
        </div>
    );
};

const LABEL_COLLISION_THRESHOLD = 33;

function formatNumberShort(n: number): string {
    if (n >= 1_000_000) {
        return `${(n / 1_000_000).toLocaleString("en-US")}M`;
    } else if (n >= 10_000) {
        return `${(n / 1000).toLocaleString("en-US")}k`;
    }
    return n.toLocaleString("en-US");
}

interface RangeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    ref?: React.Ref<HTMLInputElement>;
    value: number;
    onValue: (val: number) => void;
    min: number;
    max: number;
    step?: number;
}

export const RangeInput: React.FC<RangeInputProps> = ({
    ref,
    value,
    min,
    max,
    step,
    onValue,
    ...otherProps
}) => {
    let value_pct = ((value - min) / (max - min)) * 100;
    // This is some nudging around to prevent collisions with the min/max labels
    let value_pct_shift: string;
    if (value_pct < LABEL_COLLISION_THRESHOLD) {
        value_pct_shift = "-7px";
    } else if (value_pct > 100 - LABEL_COLLISION_THRESHOLD) {
        value_pct_shift = "calc(-100% + 7px)";
    } else {
        value_pct_shift = "-50%";
    }
    return (
        <div className="range-input">
            <div className="range-input-label">
                <span
                    style={{
                        display:
                            value_pct < LABEL_COLLISION_THRESHOLD ? "none" : "",
                    }}
                    className="min"
                >
                    {formatNumberShort(min)}
                </span>
                <div className="current-wrapper">
                    <span
                        style={{
                            left: `${value_pct}%`,
                            transform: `translateX(${value_pct_shift})`,
                        }}
                        className="current"
                    >
                        {value.toLocaleString("en-US")}
                    </span>
                </div>
                <span
                    style={{
                        display:
                            value_pct > 100 - LABEL_COLLISION_THRESHOLD
                                ? "none"
                                : "",
                    }}
                    className="max"
                >
                    {formatNumberShort(max)}
                </span>
            </div>
            <input
                ref={ref}
                type="range"
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={(e) => onValue(parseFloat(e.target.value))}
                {...otherProps}
            />
        </div>
    );
};

// Tests
if (import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest;

    describe("formatNumberToDisplay", () => {
        test("formats integers with commas", () => {
            expect(formatNumberToDisplay(1000, "int")).toBe("1,000");
        });

        test("formats floats with one decimal place", () => {
            expect(formatNumberToDisplay(1_000_000, "float")).toBe(
                "1,000,000.0"
            );
        });
    });

    describe("inputToNumber", () => {
        test("converts comma-formatted integer string to number", () => {
            expect(inputToNumber("1,000,000", "int")).toBe(1_000_000);
        });

        test("converts comma-formatted float string to number", () => {
            expect(inputToNumber("1,000,000.1", "float")).toBe(1_000_000.1);
        });

        test("returns an error for invalid string input", () => {
            const result = inputToNumber("hello", "int");
            expect(result).toBeInstanceOf(Error);
            expect(result).toHaveProperty(
                "message",
                "Invalid characters in input."
            );
        });

        test("returns an error for float input to int type", () => {
            const result = inputToNumber("100.1", "int");
            expect(result).toBeInstanceOf(Error);
            expect(result).toHaveProperty(
                "message",
                "Integers should not contain a decimal point."
            );
        });
    });
}
