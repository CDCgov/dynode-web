import { useParams } from "../ModelState";
import { BasePoint, yDodge } from "../plots/plotUtils";
import { PointPlot } from "../plots/PointPlot";
import { Point, useModelRunData } from "../state/modelRuns";
import "./Detection.css";
import * as Plot from "@observablehq/plot";

const PRIMARY_COLOR = "var(--orange)";

function formatPct(n: number): string {
    return (n * 100).toFixed(0);
}

export function Detection() {
    let modelRunData = useModelRunData();
    let [params] = useParams();
    if (!modelRunData) {
        return null;
    }
    let { p_detect: p_detect_all, dt } = modelRunData;

    let day_100_pct = p_detect_all.find((d) => d.y === 1.0)?.x || 0;
    let maxX = Math.min(
        day_100_pct + 14,
        p_detect_all[p_detect_all.length - 1].x
    );

    let p_detect = p_detect_all.filter((d) => d.x <= maxX);

    let thresholds = [0.25, 0.75];
    let annotations: BasePoint[] = [];
    for (let i = 0; i < p_detect.length; i++) {
        let point = p_detect[i];
        let previousPoint = p_detect[i - 1];

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
            <h3>Probability of Detecting at Least One Case</h3>
            <p className="subtitle mb-2">
                Given {formatPct(params.p_test_sympto)}% of new symptomatic
                infections tested, {formatPct(params.p_test_forward)}% of tests
                forwarded public health, and{" "}
                {formatPct(params.test_sensitivity)}% test sensitivity.
            </p>

            <h4 className="mb-1">Symptomatic Cases Tested</h4>
            <PointPlot<Point>
                dataTable={dt.table}
                filter={(d) =>
                    d.output_type === "SymptomaticIncidence" && d.x <= maxX
                }
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

            <h4 className="mb-1 mt-1">Cumulative Probability of Detection</h4>
            <PointPlot
                data={p_detect}
                aspectRatio={0.4}
                yLabel="Probability (%)"
                grid={false}
                tickFormat={(n) => `${formatPct(n)}`}
                maxY={1.0}
                extraConfig={{
                    marginTop: 30,
                    marginRight: 110,
                }}
                formatTooltipNumber={(n) => `${formatPct(n)}% probability`}
                renderMarks={(data) => {
                    return [
                        Plot.areaY(data, {
                            x: "x",
                            y: "y",
                            fill: PRIMARY_COLOR,
                            // fillOpacity: 0.2,
                        }),
                        Plot.lineX(data, {
                            x: "x",
                            y: "y",
                            stroke: PRIMARY_COLOR,
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
        </div>
    );
}
