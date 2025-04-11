import { useParams } from "../ModelState";
import { BasePoint, yDodge } from "../plots/plotUtils";
import { PointPlot } from "../plots/PointPlot";
import { Point, useModelRunData } from "../state/modelRuns";
import "./Detection.css";
import * as Plot from "@observablehq/plot";

const PRIMARY_COLOR = "var(--orange)";

export function Detection() {
    let modelRunData = useModelRunData();
    let [params] = useParams();
    if (!modelRunData) {
        return null;
    }
    let { p_detect, dt } = modelRunData;

    if (!params.p_test_sympto) {
        return (
            <div>
                <h3 className="mb-1">Probability to Detect 1+ Cases</h3>
                <p>No cases detected.</p>
            </div>
        );
    }

    let thresholds = [0.25, 0.75];
    let annotations: BasePoint[] = [];
    let maxX = p_detect[p_detect.length - 1].x;
    for (let i = 0; i < p_detect.length; i++) {
        let point = p_detect[i];
        let previousPoint = p_detect[i - 1];
        maxX = Math.max(maxX, point.x);

        if (point.y < thresholds[0]) {
            continue;
        }
        let x: number;
        if (point.y === thresholds[0] || !previousPoint) {
            x = point.x;
        } else {
            x = previousPoint.x;
        }
        annotations.push({
            x,
            y: thresholds[0],
        });
        thresholds.shift();
    }

    return (
        <div>
            <h3 className="mb-1">Probability to Detect 1+ Cases</h3>

            <PointPlot
                data={p_detect}
                aspectRatio={0.4}
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
                            fill: "var(--orange)",
                            // fillOpacity: 0.2,
                        }),
                        Plot.lineX(data, {
                            x: "x",
                            y: "y",
                            stroke: "var(--orange)",
                        }),
                        Plot.ruleY(annotations, {
                            y: "y",
                            x1: "x",
                            x2: maxX,
                            stroke: "black",
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
            <h4 className="mb-1 mt-2">Symptomatic Cases Tested</h4>
            <PointPlot<Point>
                dataTable={dt.table}
                filter={(d) => d.output_type === "SymptomaticIncidence"}
                yLabel="Cases"
                aspectRatio={0.2}
                extraConfig={{
                    marginRight: 110,
                }}
                formatTooltipNumber={(n) => {
                    let total = Math.round(n);
                    let tested = Math.round(n * params.p_test_sympto);

                    return `${tested.toLocaleString()} of ${total.toLocaleString()} symptomatic cases tested`;
                }}
                renderMarks={(data, _, extra) => {
                    if (!(data instanceof Array)) {
                        throw new Error("Expected data to be an array");
                    }
                    return [
                        ["all", "tested"].map((group) => {
                            return [
                                Plot.line(data, {
                                    y:
                                        group === "tested"
                                            ? (d) => d.y * params.p_test_sympto
                                            : "y",
                                    x: "x",
                                    stroke:
                                        group === "tested"
                                            ? PRIMARY_COLOR
                                            : "var(--grey)",
                                }),

                                Plot.textY([data[data.length - 1]], {
                                    text: () =>
                                        group === "tested" ? "Tested" : "All",
                                    x: maxX,
                                    y: (d) => {
                                        let [yAll, yTested] = yDodge(
                                            d.y,
                                            d.y * params.p_test_sympto,
                                            extra.yScale
                                        );
                                        return group === "tested"
                                            ? yTested
                                            : yAll;
                                    },
                                    fill:
                                        group === "tested"
                                            ? PRIMARY_COLOR
                                            : "var(--grey)",
                                    fontWeight: "bold",
                                    textAnchor: "start",
                                    lineAnchor: "top",
                                    dx: 5,
                                    dy: -2,
                                }),
                            ];
                        }),
                    ];
                }}
            />
        </div>
    );
}
