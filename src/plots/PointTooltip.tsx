import { useEffect, useState } from "react";
import { Tooltip } from "./Tooltip";
import { createPortal } from "react-dom";
import { BasePoint, DataByXMap, ValidGroupKey } from "./plotUtils";
import { ObservablePlotType } from "./PointPlot";

export function PointTooltip<P extends BasePoint, G extends ValidGroupKey<P>>({
    plotRef,
    plot,
    dataByX,
    groupBy,
    groupLabel,
    colors,
    formatTooltipNumber,
}: {
    plotRef: React.RefObject<HTMLElement | null>;
    plot?: ObservablePlotType;
    colors?: Map<P[G], string>;
    dataByX: DataByXMap<P>;
    groupBy?: G;
    groupLabel?: (groupValue: P[G]) => string;
    yRange?: [number, number];

    formatTooltipNumber?: (num: number) => string;
}) {
    let [tooltip, setTooltip] = useState<Tooltip<P> | null>(null);
    let [current, setCurrentPoints] = useState<P[] | null>(null);

    useEffect(() => {
        const figure = plotRef.current?.querySelector("figure");

        const newTooltip =
            figure && plot && colors
                ? new Tooltip({
                      containerEl: figure,
                      plot,
                      pointMap: dataByX,
                      xProperty: "x",
                      yProperty: "y",
                      getColor: (d) =>
                          groupBy ? colors.get(d[groupBy]) ?? "black" : "black",
                      renderContent: (_, points) => {
                          setCurrentPoints(points || null);
                      },
                  })
                : null;

        setTooltip((prev) => {
            prev?.cleanup();
            return newTooltip;
        });

        return () => {
            newTooltip?.cleanup();
            setTooltip(null);
        };
    }, [plotRef, plot, dataByX, colors, groupBy]);

    return (
        <>
            {tooltip &&
                colors &&
                createPortal(
                    tooltip && (
                        <PointTooltipInner
                            data={current}
                            groupBy={groupBy}
                            groupLabel={groupLabel}
                            colors={colors}
                            formatTooltipNumber={formatTooltipNumber}
                        />
                    ),
                    tooltip.tooltipEl
                )}
        </>
    );
}

function PointTooltipInner<
    P extends BasePoint,
    G extends ValidGroupKey<P>
>(props: {
    data: P[] | null;
    groupBy?: G;
    groupLabel?: (d: P[G]) => string;
    colors: Map<P[G], string>;
    formatTooltipNumber?: (num: number) => string;
}) {
    if (!props.data) return null;
    let day = props.data[0].x;

    let formatTooltipNumber =
        props.formatTooltipNumber || defaultNumberFormatter;

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
                        if (props.groupBy) {
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
                                        <strong>
                                            {formatTooltipNumber(d.y)}
                                        </strong>
                                    </td>
                                </tr>
                            );
                        } else {
                            return (
                                <tr key={i}>
                                    <td colSpan={2}>
                                        {formatTooltipNumber(d.y)}
                                    </td>
                                </tr>
                            );
                        }
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
function defaultNumberFormatter(num: number): string {
    return (Math.round(num / 1000) * 1000).toLocaleString("en-US");
}
