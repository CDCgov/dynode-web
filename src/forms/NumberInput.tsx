import { useEffect, useRef, useState } from "react";
import "./NumberInput.css";
import {
    ParameterEditorConfig,
    ParameterPath,
} from "../config/parameters.config";
import { Label } from "./Label";
import Range from "./Range";

export type NumberType = "float" | "int" | "pct";

export function inputToNumber(
    input: string,
    numberType: NumberType,
): number | Error {
    // remove whitespace and commas
    let normalized = input.replace(/\s+/g, "").replace(/,/g, "");

    // for each number type, we check its format against a regex. if that fails,
    // throw an error. if it matches, use a parser function.
    function testAndParse(
        regex: RegExp,
        parse: (s: string) => number | Error,
    ): number | Error {
        if (!regex.test(normalized)) {
            return new Error("Invalid number format.");
        } else {
            return parse(normalized);
        }
    }

    let x;
    if (numberType == "int") {
        x = testAndParse(/^\d+$/, (s: string) => parseInt(s, 10));
    } else if (numberType == "float") {
        x = testAndParse(/^\d+(.\d*)?$/, (s: string) => parseFloat(s));
    } else if (numberType == "pct") {
        x = testAndParse(
            /^\d+(.\d*)?%?$/,
            (s: string) => parseFloat(s) / 100.0,
        );
    } else {
        return new Error("Invalid number type");
    }

    if (x instanceof Error) {
        // parser errors are passed through
        return x;
    } else if (isNaN(x)) {
        // number NaN's are errors
        return new Error("Invalid number format.");
    } else {
        // actual numbers
        return x;
    }
}

export function formatNumberToDisplay(
    num: number,
    numberType: NumberType,
): string {
    if (numberType == "float") {
        return num.toLocaleString("en-US", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 20,
        });
    } else if (numberType == "int") {
        return num.toLocaleString("en-US");
    } else if (numberType == "pct") {
        return num.toLocaleString("en-US", {
            style: "percent",
            maximumFractionDigits: 20,
        });
    } else {
        throw new Error("Invalid number type");
    }
}

function addFloat(a: number, b: number): number {
    return Math.round((a + b) * 10000) / 10000;
}

type NumberInputProps = {
    numberType?: NumberType;
    parameter?: ParameterPath;
};

type TextNumberInputProps = NumberInputProps & {
    showSaveButton?: boolean;
    min?: number;
    max?: number;
    step?: number;
    value: number;
    onValue: (val: number) => void;
};

type RangeInputProps = NumberInputProps & {
    range: true;
    min: number;
    max: number;
    step?: number;
    markFormat?: (value: number) => string;
    tooltipLabelFormat?: (value: number, index: number) => string;
    showMinMaxLabels?: boolean;
};

type SingleValueRangeProps = RangeInputProps & {
    value: number;
    onValue: (val: number) => void;
};

type MultiValueRangeProps = RangeInputProps & {
    isMulti: true;
    value: [number, number];
    onValue: (val: [number, number]) => void;
};

export function NumberInput(props: TextNumberInputProps): React.ReactNode;
export function NumberInput(props: SingleValueRangeProps): React.ReactNode;
export function NumberInput(props: MultiValueRangeProps): React.ReactNode;
export function NumberInput(
    props: TextNumberInputProps | SingleValueRangeProps | MultiValueRangeProps,
) {
    if ("range" in props && props.range === true) {
        if ("isMulti" in props && props.isMulti === true) {
            return <RangeNumberInput {...props} />;
        } else {
            return <RangeNumberInput {...props} />;
        }
    } else {
        if (typeof props.value === "number") {
            return <TextNumberInput {...(props as TextNumberInputProps)} />;
        }
    }
}

function TextNumberInput({
    numberType = "float",
    parameter,
    min,
    max,
    step,
    value,
    onValue,
    showSaveButton = true,
}: TextNumberInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState(
        formatNumberToDisplay(value as number, numberType),
    );
    const [errorMessage, setErrorMessage] = useState("");

    let paramConfig = parameter && ParameterEditorConfig.getConfig(parameter);

    useEffect(() => {
        setInputValue(formatNumberToDisplay(value as number, numberType));
    }, [value, numberType]);

    useEffect(() => {
        if (
            inputRef.current &&
            inputRef.current.validationMessage !== errorMessage
        ) {
            inputRef.current.setCustomValidity(errorMessage);
        }
    }, [errorMessage]);

    const commitValue = () => {
        const parsed = inputToNumber(inputValue, numberType);

        if (parsed instanceof Error) {
            setErrorMessage(parsed.message);
        } else {
            let newValue;

            if (max !== undefined && parsed > max) {
                newValue = max;
            } else if (min !== undefined && parsed < min) {
                newValue = min;
            } else {
                newValue = parsed;
            }

            setErrorMessage("");
            onValue(newValue);
            setInputValue(formatNumberToDisplay(newValue, numberType));
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            inputRef.current?.blur();
        } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            e.preventDefault();
            const increment = e.key === "ArrowUp" ? step || 1 : -(step || 1);
            const newVal = addFloat(value, increment);
            if (
                (min === undefined || newVal >= min) &&
                (max === undefined || newVal <= max)
            ) {
                onValue(newVal);
            }
        }
    };
    return (
        <>
            <Label parameter={parameter} />
            <div className="number-input-wrapper" title={paramConfig?.tooltip}>
                <input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={commitValue}
                    onKeyDown={handleKeyDown}
                />
                {showSaveButton && (
                    <div className="number-input-save">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                commitValue();
                            }}
                        >
                            Save
                        </button>
                    </div>
                )}
                {errorMessage && (
                    <span className="input-error">{errorMessage}</span>
                )}
            </div>
        </>
    );
}

function RangeNumberInput(props: SingleValueRangeProps | MultiValueRangeProps) {
    const handleChange = (_: unknown, value: number | number[]) => {
        if (Array.isArray(value)) {
            if ("isMulti" in props) {
                props.onValue(value as [number, number]);
            }
        } else {
            if (!("isMulti" in props)) {
                props.onValue(value);
            }
        }
    };
    return (
        <>
            <Label parameter={props.parameter} />
            <Range
                numberType={props.numberType}
                min={props.min}
                max={props.max}
                step={props.step}
                value={props.value}
                valueLabelDisplay={props.tooltipLabelFormat ? "auto" : "off"}
                markFormat={props.markFormat}
                valueLabelFormat={props.tooltipLabelFormat}
                track={false}
                onChange={handleChange}
                showMinMaxLabels={props.showMinMaxLabels}
            />
        </>
    );
}
