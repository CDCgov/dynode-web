import Slider, { SliderProps } from "@mui/material/Slider";
import styled from "@emotion/styled";
import { alpha } from "@mui/material";
import { NumberType } from "./NumberInput";

function formatPct(n: number): string {
    return `${(n * 100).toFixed(0)}%`;
}
function formatNumberShort(n: number): string {
    if (n >= 1_000_000) return `${(n / 1_000_000).toLocaleString("en-US")}M`;
    if (n >= 10_000) return `${(n / 1000).toLocaleString("en-US")}k`;
    return n.toLocaleString("en-US");
}

let PURPLE = "rgb(149, 128, 255)";
let POINTER_SIZE = 18;
const CustomSlider = styled(Slider)({
    color: PURPLE,
    size: 3,
    "& .MuiSlider-thumb": {
        // Adjust thumb for non-touch devices
        "@media (pointer: fine)": {
            height: `${POINTER_SIZE}px`,
            width: `${POINTER_SIZE}px`,
        },
        "&:hover, &.Mui-focusVisible": {
            boxShadow: `0px 0px 0px 5px ${alpha(PURPLE, 0.16)}`,
        },

        "&.Mui-active": {
            boxShadow: `0px 0px 0px 10px ${alpha(PURPLE, 0.16)}`,
        },
        "& .MuiSlider-valueLabel": {
            backgroundColor: "white",
            color: "black",
        },
    },
    "& .MuiSlider-rail": {
        "&:before, &:after": {
            content: '""',
            position: "absolute",
            width: `${POINTER_SIZE}px`,
            height: "100%",
            transform: `translateX(-${POINTER_SIZE / 2}px)`,
            backgroundColor: "currentcolor",
            borderRadius: "inherit",
        },
        "&:after": {
            left: "100%",
        },
        "&:before": {
            left: "0",
        },
    },
});

export default function Range(
    props: {
        numberType?: NumberType;
        min: number;
        max: number;
        markFormat?: (value: number) => string;
        showMinMaxLabels?: boolean;
    } & SliderProps,
) {
    let { value, min, max } = props;
    let markFormat;
    if (typeof props.markFormat === "function") {
        markFormat = props.markFormat;
    } else if (props.numberType === "pct") {
        markFormat = formatPct;
    } else {
        markFormat = formatNumberShort;
    }

    if (value === undefined) {
        throw new Error("Value is required");
    }

    let values = Array.isArray(value) ? value : [value];

    if (values.length === 2 && values[0] === values[1]) {
        values = [values[0]];
    }

    const rangeInfoMap: Array<[number, number, string]> = values.map((v) => {
        const pct = ((v - min) / (max - min)) * 100;
        let shift = "-50%";
        // if (pct < LABEL_COLLISION_THRESHOLD) shift = "-7px";
        // else if (pct > 100 - LABEL_COLLISION_THRESHOLD)
        //     shift = "calc(-100% + 7px)";
        return [v, pct, shift];
    });

    return (
        <div style={{ position: "relative" }}>
            <div
                style={{
                    padding: `0 ${POINTER_SIZE / 2}px`,
                }}
            >
                <div style={{ position: "relative" }}>
                    {rangeInfoMap.map(([value, pct, shift], index) => (
                        <div
                            key={index}
                            className="range-info"
                            style={{
                                color: PURPLE,
                                top: 0,
                                left: `${pct}%`,
                                transform: `translateX(${shift}) translateY(-6px) `,
                            }}
                        >
                            {markFormat(value)}
                        </div>
                    ))}
                </div>
                <CustomSlider track={false} {...props} />
            </div>
            {props.showMinMaxLabels !== false && (
                <div
                    className="range-info"
                    style={{
                        bottom: 0,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <span>{markFormat(min)}</span>
                    <span>{markFormat(max)}</span>
                </div>
            )}
        </div>
    );
}
