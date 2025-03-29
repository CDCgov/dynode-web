import * as Plot from "@observablehq/plot";
import { MitigationType } from "@wasm/wasm_dynode";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { Point } from "../state/modelRuns";

enum PlotColor {
    Default = "var(--default-plot-line-color)",
    Purple = "var(--purple)",
}

function getColors(group_by: keyof Point): {
    domain: string[];
    range: string[];
} | null {
    switch (group_by) {
        case "mitigation_type":
            return {
                domain: ["Unmitigated", "Mitigated"] as MitigationType[],
                range: [PlotColor.Default, PlotColor.Purple],
            };
        default:
            return null;
    }
}

function computeTickInfo(
    yLabel: string,
    maxY: number
): [string, (d: number) => string] {
    let tickFormat = (d: number) => d.toLocaleString();
    if (maxY >= 1_000_000) {
        yLabel += " (millions)";
        tickFormat = (d) => (d / 1_000_000).toLocaleString("en-US");
    } else if (maxY >= 100_00) {
        yLabel += " (thousands)";
        tickFormat = (d) => (d / 1000).toLocaleString("en-US");
    }
    return [yLabel, tickFormat];
}

export interface SEIRPlotProps {
    data: Point[];
    group_by: keyof Point;
    yDomain?: [number, number];
    showLegend?: boolean;
    yTicks?: number;
    yLabel: string;
    maxY?: number;
}
export function SEIRPlot({
    yTicks = 10,
    yDomain,
    showLegend = true,
    data,
    group_by,
    yLabel: yLabelBase,
    maxY: userMaxY,
}: SEIRPlotProps) {
    const plotRef = useRef<HTMLDivElement>(null);
    const [containerSize, setContainerSize] = useState<[number, number]>([
        800, 500,
    ]);

    useEffect(() => {
        if (!data.length || !plotRef.current) return;

        let colors = getColors(group_by);

        let maxY = userMaxY;
        if (!maxY) {
            maxY = Math.max(...data.map((d) => d.y));
        }

        const [yLabel, tickFormat] = computeTickInfo(yLabelBase, maxY);
        const plot = Plot.plot({
            x: { label: "Days" },
            y: {
                label: yLabel,
                domain: yDomain || [0, maxY],
                grid: true,
                ticks: yTicks,
                tickFormat,
            },
            color: colors
                ? {
                      legend: showLegend,
                      ...colors,
                  }
                : undefined,
            width: containerSize[0],
            // TODO allow for aspect ratio to be set
            height: Math.max(containerSize[0] * 0.5, 200),
            marks: [
                Plot.line(data, {
                    x: "x",
                    y: "y",
                    stroke: group_by,
                }),
            ],
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
