import React, { useMemo } from "react";
import "./NumberInput.css";

const LABEL_COLLISION_THRESHOLD = 33;

function formatNumberShort(n: number): string {
    if (n >= 1_000_000) return `${(n / 1_000_000).toLocaleString("en-US")}M`;
    if (n >= 10_000) return `${(n / 1000).toLocaleString("en-US")}k`;
    return n.toLocaleString("en-US");
}

export interface RangeInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    value: number;
    onValue: (val: number) => void;
    min: number;
    max: number;
    step?: number;
    showMinMaxLabels: boolean;
}

export const RangeInput = React.memo(
    React.forwardRef<HTMLInputElement, RangeInputProps>(
        (
            { value, min, max, step, onValue, showMinMaxLabels, ...otherProps },
            ref
        ) => {
            const [value_pct, value_pct_shift] = useMemo(() => {
                const pct = ((value - min) / (max - min)) * 100;
                let shift = "-50%";
                if (pct < LABEL_COLLISION_THRESHOLD) shift = "-7px";
                else if (pct > 100 - LABEL_COLLISION_THRESHOLD)
                    shift = "calc(-100% + 7px)";
                return [pct, shift];
            }, [value, min, max]);

            return (
                <div className="range-input">
                    <div className="range-input-label">
                        {showMinMaxLabels && (
                            <span
                                className={`min ${
                                    value_pct < LABEL_COLLISION_THRESHOLD
                                        ? "hidden"
                                        : ""
                                }`}
                            >
                                {formatNumberShort(min)}
                            </span>
                        )}
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
                        {showMinMaxLabels && (
                            <span
                                className={`max ${
                                    value_pct > 100 - LABEL_COLLISION_THRESHOLD
                                        ? "hidden"
                                        : ""
                                }`}
                            >
                                {formatNumberShort(max)}
                            </span>
                        )}
                    </div>
                    <input
                        ref={ref}
                        className="range"
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
        }
    )
);
