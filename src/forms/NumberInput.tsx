import { useEffect, useRef, useState } from "react";
import "./NumberInput.css";
import {
    ParameterEditorConfig,
    ParameterPath,
} from "../config/parameters.config";
import { Label } from "./Label";
import Range from "./Range";

export type NumberType = "float" | "int" | "pct";

function inputToNumber(input: string, numberType: NumberType): number | Error {
    if (!/^[\d\s.,]+$/.test(input)) {
        return new Error("Invalid characters in input.");
    }
    let normalized = input.replace(/\s+/g, "").replace(/,/g, "");
    if (numberType === "int" && normalized.includes(".")) {
        return new Error("Integers should not contain a decimal point.");
    }
    const number =
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
            setErrorMessage("");
            onValue(parsed);
            setInputValue(formatNumberToDisplay(parsed, numberType));
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
