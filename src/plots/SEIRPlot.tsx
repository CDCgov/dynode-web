import * as Plot from "@observablehq/plot";
import { ModelRunType } from "@wasm/wasm_dynode";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { LabeledModelRun } from "../ModelState";

export type Point = {
    x: number;
    y: number;
    category: ModelRunType;
};

enum PlotColor {
    Default = "var(--default-plot-line-color)",
    Purple = "var(--purple)",
}

export interface SEIRPlotProps {
    data: LabeledModelRun[];
    yDomain?: [number, number];
    showLegend?: boolean;
    yTicks?: number;
    yLabel: string;
}

function computeTickInfo(
    data: LabeledModelRun[],
    yLabel: string
): [number, string, (d: number) => string] {
    const maxY = data.reduce((max, [, values]) => {
        return Math.max(
            max,
            values.reduce((max, { y }) => Math.max(max, y), 0)
        );
    }, 0);
    let tickFormat = (d: number) => d.toLocaleString();
    if (maxY >= 1_000_000) {
        yLabel += " (millions)";
        tickFormat = (d) => (d / 1_000_000).toLocaleString("en-US");
    } else if (maxY >= 100_00) {
        yLabel += " (thousands)";
        tickFormat = (d) => (d / 1000).toLocaleString("en-US");
    }
    return [maxY, yLabel, tickFormat];
}

export function SEIRPlot({
    yTicks = 10,
    yDomain,
    showLegend = true,
    data,
    yLabel: yLabelBase,
}: SEIRPlotProps) {
    const plotRef = useRef<HTMLDivElement>(null);
    const [containerSize, setContainerSize] = useState<[number, number]>([
        800, 500,
    ]);

    useEffect(() => {
        if (!data.length || !plotRef.current) return;

        let { marks, color } = getTypedPlotData(data, {
            Unmitigated: PlotColor.Default,
            Mitigated: PlotColor.Purple,
        });

        const [maxY, yLabel, tickFormat] = computeTickInfo(data, yLabelBase);

        const plot = Plot.plot({
            x: { label: "Days" },
            y: {
                label: yLabel,
                domain: yDomain || [0, maxY],
                grid: true,
                ticks: yTicks,
                tickFormat,
            },
            color: showLegend ? color : undefined,
            width: containerSize[0],
            // TODO allow for aspect ratio to be set
            height: Math.max(containerSize[0] * 0.5, 200),
            marks,
        });

        // Append plot to the div
        plotRef.current.innerHTML = "";
        plotRef.current.appendChild(plot);

        return () => plot.remove();
    }, [data, containerSize, yLabelBase, yDomain, showLegend, yTicks]);

    useLayoutEffect(() => {
        if (!plotRef.current) return;

        let timeoutId: ReturnType<typeof setTimeout> | null = null;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                if (entry.contentRect.width) {
                    // Debounce resize
                    if (timeoutId) clearTimeout(timeoutId);
                    timeoutId = setTimeout(() => {
                        setContainerSize([
                            entry.contentRect.width,
                            entry.contentRect.height,
                        ]);
                    }, 100);
                }
            }
        });

        observer.observe(plotRef.current);

        return () => {
            observer.disconnect();
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return <div ref={plotRef} />;
}

type TypedPlotData = {
    marks: Plot.Line[];
    color: ColorConfig;
};

type ColorConfig = {
    legend: boolean;
    domain: string[];
    range: string[];
};
function getTypedPlotData(
    outputs: LabeledModelRun[],
    colors: Record<ModelRunType, PlotColor>
): TypedPlotData {
    let marks: Plot.Line[] = [];
    let color: ColorConfig = {
        legend: true,
        domain: [],
        range: [],
    };
    for (let [modelRunType, output] of outputs) {
        let plotColor = colors[modelRunType];
        let mark = renderLine(output, plotColor);
        if (mark) {
            marks.push(mark);
            color.domain.push(modelRunType);
            color.range.push(plotColor);
        }
    }
    return { marks, color };
}

function renderLine(values: Point[], color: PlotColor) {
    let config: {
        x: keyof Point;
        y: keyof Point;
        stroke: PlotColor;
    } = {
        x: "x",
        y: "y",
        stroke: color,
    };
    return Plot.line(values, config);
}
