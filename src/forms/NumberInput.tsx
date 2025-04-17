import { useEffect, useRef, useState } from "react";
import "./NumberInput.css";
import { RangeInput } from "./RangeInput";
import {
    ParameterEditorConfig,
    ParameterPath,
} from "../config/parameters.config";
import { Label } from "./Label";

type NumberType = "float" | "int";

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

interface NumberInputProps {
    numberType?: NumberType;
    range?: boolean;
    min?: number;
    max?: number;
    showMinMaxLabels?: boolean;
    step?: number;
    value: number;
    parameter?: ParameterPath;
    onValue: (val: number) => void;
    showSaveButton?: boolean;
}

export function NumberInput({
    numberType = "float",
    parameter,
    range,
    min,
    max,
    showMinMaxLabels = true,
    step,
    value,
    onValue,
    showSaveButton = true,
    ...otherProps
}: NumberInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const rafRef = useRef<number | null>(null);
    const [inputValue, setInputValue] = useState(
        formatNumberToDisplay(value, numberType),
    );
    const [errorMessage, setErrorMessage] = useState("");

    let paramConfig = parameter && ParameterEditorConfig.getConfig(parameter);

    useEffect(() => {
        setInputValue(formatNumberToDisplay(value, numberType));
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

    const handleRangeChange = (newVal: number) => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            onValue(newVal);
        });
    };

    if (range) {
        if (min === undefined || max === undefined) {
            console.error("Range input requires min and max");
            return null;
        }

        return (
            <>
                <Label parameter={parameter} />
                <RangeInput
                    ref={inputRef}
                    value={value}
                    onValue={handleRangeChange}
                    min={min}
                    max={max}
                    title={paramConfig?.tooltip}
                    showMinMaxLabels={showMinMaxLabels}
                    step={step}
                />
            </>
        );
    }

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
                    {...otherProps}
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

function addFloat(a: number, b: number): number {
    return Math.round((a + b) * 10000) / 10000;
}
