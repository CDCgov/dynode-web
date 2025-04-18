import { useParams } from "../ModelState";
import { BasePoint, yDodge } from "../plots/plotUtils";
import { PointPlot } from "../plots/PointPlot";
import { Point, useModelRunData } from "../state/modelRuns";
import "./Detection.css";
import * as Plot from "@observablehq/plot";

const PRIMARY_COLOR = "var(--purple)";

function formatPct(n: number, d: number = 0): string {
    return (n * 100).toFixed(d);
}

type AnnotationPoint = BasePoint & { threshold: number };

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
    let annotations: AnnotationPoint[] = [];
    for (let i = 0; i < p_detect.length; i++) {
        if (thresholds.length === 0) {
            break;
        }
        let point = p_detect[i];

        while (thresholds.length > 0 && point.y >= thresholds[0]) {
            annotations.push({
                x: point.x,
                y: point.y,
                threshold: thresholds[0],
            });
            thresholds.shift();
        }
    }

    return (
        <div>
            <h3>Probability of Detecting at Least One Case</h3>
            <p className="subtitle">
                Given {formatPct(params.p_test_sympto, 1)}% of new symptomatic
                infections tested, {formatPct(params.p_test_forward)}% of tests
                forwarded public health, and{" "}
                {formatPct(params.test_sensitivity)}% test sensitivity.
            </p>

            <h4>Symptomatic Cases Tested</h4>
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

            <h4 className="mt-1">Cumulative Probability of Detection</h4>
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
                        Plot.line(data, {
                            x: "x",
                            y: "y",
                            stroke: PRIMARY_COLOR,
                            strokeWidth: 2,
                        }),
                        Plot.ruleY(annotations, {
                            y: "threshold",
                            x1: "x",
                            x2: maxX,
                            stroke: "black",
                            strokeDasharray: "2,2",
                        }),
                        Plot.textY(annotations, {
                            text: (d) =>
                                `>=${
                                    d.threshold * 100
                                }% probability\nto detect 1+ case`,
                            x: maxX,
                            y: "threshold",
                            fill: "black",
                            textAnchor: "start",
                            lineAnchor: "top",
                            dx: 5,
                            dy: 10,
                        }),
                        Plot.textY(annotations, {
                            text: (d) => `Day ${d.x}`,
                            x: maxX,
                            y: "threshold",
                            fill: "black",
                            fontWeight: "bold",
                            textAnchor: "start",
                            lineAnchor: "top",
                            dx: 5,
                            dy: -2,
                        }),
                        Plot.dot(annotations, {
                            y: "threshold",
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
