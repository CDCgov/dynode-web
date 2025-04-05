import { useEffect, useState } from "react";
import { Tooltip } from "./Tooltip";
import * as Plot from "@observablehq/plot";
import { createPortal } from "react-dom";
import { BasePoint, DataByXMap, ValidGroupKey } from "./plotUtils";

export function PointTooltip<P extends BasePoint, G extends ValidGroupKey<P>>({
    plotRef,
    plot,
    dataByX,
    groupBy,
    groupLabel,
    colors,
}: {
    plotRef: React.RefObject<HTMLElement | null>;
    plot: (HTMLElement | SVGElement) & Plot.Plot;
    dataByX: DataByXMap<P>;
    groupBy: G;
    groupLabel?: (groupValue: P[G]) => string;
    yRange?: [number, number];
    colors: Map<P[G], string>;
}) {
    let [tooltip, setTooltip] = useState<Tooltip<P> | null>(null);
    let [current, setCurrent] = useState<P[] | null>(null);

    useEffect(() => {
        let tooltip: Tooltip<P> | null = null;
        if (plotRef.current) {
            let figure = plotRef.current.querySelector("figure");
            if (!figure) {
                console.warn("No figure element found in plot");
            } else {
                tooltip = new Tooltip({
                    containerEl: figure,
                    plot,
                    pointMap: dataByX,
                    xProperty: "x",
                    yProperty: "y",
                    getColor: (d) => colors.get(d[groupBy]) || "black",
                    renderContent: (_, points) => {
                        setCurrent(points || null);
                    },
                });
                setTooltip(tooltip);
            }
        }
        return () => {
            tooltip?.cleanup();
            setTooltip(null);
        };
    }, [plotRef, plot, dataByX, colors, groupBy]);

    if (!tooltip) return null;

    return createPortal(
        <PointTooltipInner
            data={current}
            groupBy={groupBy}
            groupLabel={groupLabel}
            colors={colors}
        />,
        tooltip.tooltipEl
    );
}

function PointTooltipInner<
    P extends BasePoint,
    G extends ValidGroupKey<P>
>(props: {
    data: P[] | null;
    groupBy: G;
    groupLabel?: (d: P[G]) => string;
    colors: Map<P[G], string>;
}) {
    if (!props.data) return null;
    let day = props.data[0].x;

    return (
        <div className="plot-tooltip-content">
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}>Day {day}</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((d, i) => {
                        let color = props.colors.get(d[props.groupBy]);
                        let group = props.groupLabel
                            ? props.groupLabel(d[props.groupBy])
                            : `${d[props.groupBy]}`;
                        return (
                            <tr key={i}>
                                <td>
                                    {color && <Swatch color={color} />}
                                    {group}
                                </td>
                                <td style={{ textAlign: "right" }}>
                                    <strong>{formatTooltipNumber(d.y)}</strong>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

function Swatch({ color }: { color: string }) {
    return (
        <span
            style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                backgroundColor: color,
                marginRight: "5px",
            }}
        />
    );
}
function formatTooltipNumber(num: number): string {
    return (Math.round(num / 1000) * 1000).toLocaleString("en-US");
}
