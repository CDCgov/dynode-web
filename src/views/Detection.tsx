import { BasePoint } from "../plots/plotUtils";
import { PointPlot } from "../plots/PointPlot";
import { useModelRunData } from "../state/modelRuns";
import "./Detection.css";
import * as Plot from "@observablehq/plot";

export function Detection() {
    let modelRunData = useModelRunData();
    if (!modelRunData) {
        return null;
    }
    let { p_detect } = modelRunData;

    let thresholds = [0.25, 0.75];
    let annotations: BasePoint[] = [];
    let maxX = p_detect[p_detect.length - 1].x;
    for (let point of p_detect) {
        if (point.y >= thresholds[0]) {
            annotations.push({
                x: point.x,
                y: thresholds[0],
            });
            thresholds.shift();
        }
        maxX = Math.max(maxX, point.x);
    }

    return (
        <div>
            <h3 className="mb-1">Probability to Detect 1+ Cases</h3>
            <PointPlot
                data={p_detect}
                yLabel="Probability (%)"
                grid={false}
                tickFormat={(n) => `${(n * 100).toFixed(0)}`}
                maxY={1.0}
                extraConfig={{
                    marginTop: 30,
                    marginRight: 110,
                }}
                formatTooltipNumber={(n) =>
                    `${(n * 100).toFixed(0)}% probability`
                }
                renderMarks={(data) => {
                    return [
                        Plot.areaY(data, {
                            x: "x",
                            y: "y",
                            fill: "var(--purple)",
                            fillOpacity: 0.2,
                        }),
                        Plot.lineX(data, {
                            x: "x",
                            y: "y",
                            stroke: "var(--purple)",
                        }),
                        Plot.ruleY(annotations, {
                            y: "y",
                            x1: "x",
                            x2: maxX,
                            stroke: "var(--purple)",
                            strokeDasharray: "2,2",
                        }),
                        Plot.textY(annotations, {
                            text: (d) =>
                                `${d.y * 100}% probability\nto detect 1+ case`,
                            x: maxX,
                            y: "y",
                            fill: "black",
                            textAnchor: "start",
                            lineAnchor: "top",
                            dx: 5,
                            dy: 10,
                        }),
                        Plot.textY(annotations, {
                            text: (d) => `Day ${d.x}`,
                            x: maxX,
                            y: "y",
                            fill: "black",
                            fontWeight: "bold",
                            textAnchor: "start",
                            lineAnchor: "top",
                            dx: 5,
                            dy: -2,
                        }),
                        Plot.dot(annotations, {
                            y: "y",
                            x: "x",
                            fill: "black",
                            r: 3,
                        }),
                    ];
                }}
            />
        </div>
    );
}
