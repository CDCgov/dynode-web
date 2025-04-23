import * as Plot from "@observablehq/plot";
import { PointPlot, PointPlotProps } from "./PointPlot";
import { useModelRunData } from "../state/modelRuns";
import { MitigationType, Parameters } from "@wasm/wasm_dynode";
import { DataByGroupMap, dodge, getPeakY, ValidGroupKey } from "./plotUtils";
import { useParams } from "../ModelState";
import { Point } from "../state/modelRuns";
import { useCallback, useMemo } from "react";

// These are constants for the lines that appear below the plot
let ANNOTATION_VERTICAL_LINE_LENGTH = 30;
let ANNOTATION_TEXT_SIZE = 12;
let ANNOTATION_LINE_HEIGHT = 14;

const PRIMARY_COLOR = "#000";
const SECONDARY_COLOR = "#999";

const COLORS = (dataByGroup: DataByGroupMap<Point, "mitigation_type">) => {
    const hasMitigated = dataByGroup.has("Mitigated");
    return new Map<MitigationType, string>(
        hasMitigated
            ? [
                  ["Unmitigated", SECONDARY_COLOR],
                  ["Mitigated", PRIMARY_COLOR],
              ]
            : [["Unmitigated", PRIMARY_COLOR]]
    );
};

export const MitigationPlot = function MitigationPlot<
    F extends ValidGroupKey<Point> = never
>({
    annotations: showAnnotations = false,
    ...restProps
}: Partial<PointPlotProps<Point, "mitigation_type", F>> & {
    annotations?: boolean;
}) {
    let modelRunData = useModelRunData();
    let [params] = useParams();
    let extraConfig = useMemo(
        () => ({
            marginTop: showAnnotations ? 35 : undefined,
            marginBottom: showAnnotations ? 100 : undefined,
        }),
        [showAnnotations]
    );
    let renderMarks = useCallback(
        ((dataByGroup, _, { xScale, yScale }) => {
            if (!(dataByGroup instanceof Map)) {
                throw new Error("Must provide grouped data");
            }
            let mitigated = dataByGroup.get("Mitigated");
            let unmitigated = dataByGroup.get("Unmitigated");
            let marks: Plot.Markish[] = [];

            if (!unmitigated && !unmitigated) return marks;

            // Unmitigated only
            if (!mitigated) {
                marks.push(
                    Plot.line(unmitigated, {
                        x: "x",
                        y: "y",
                        stroke: "mitigation_type",
                    })
                );
                return marks;
            }

            // Mitigated + Unmitigated
            marks.push([
                // Unmitigated, dotted light grey line
                Plot.line(unmitigated, {
                    x: "x",
                    y: "y",
                    stroke: "mitigation_type",
                    strokeDasharray: "2, 4",
                }),

                // Mitigated, solid dark line
                Plot.line(mitigated, {
                    x: "x",
                    y: "y",
                    stroke: "mitigation_type",
                }),
            ]);

            if (!showAnnotations) {
                return marks;
            }

            let peakLabels = getPeakLabels(dataByGroup, xScale, yScale);
            let { annotations, annotationSegments } = getAnnotations({
                params,
                dataByGroup,
                xScale,
            });

            // Get the inverted length of the vertical line
            let annotationRuleLength =
                yScale.invert?.(0) -
                yScale.invert?.(ANNOTATION_VERTICAL_LINE_LENGTH);

            marks.push([
                // Horizontal
                Plot.ruleY(annotations, {
                    y: -annotationRuleLength,
                    x1: "startX",
                    x2: "endX",
                    stroke: "color",
                }),

                ...annotations.map((annotation) => [
                    // Text annotations: Day start-end
                    Plot.text([annotation], {
                        text: (d: Annotation) => `Day ${d.startX}–${d.endX}`,
                        fontFamily: "var(--header-font)",
                        fontSize: ANNOTATION_TEXT_SIZE,
                        fontWeight: "bold",
                        x: "startX",
                        y: 0,
                        dy: annotation.dy,
                        dx: -1,
                        fill: "color",
                        stroke: "white",
                        textAnchor: "start",
                        lineAnchor: "bottom",
                    }),

                    // Text annotations: Description
                    Plot.text([annotation], {
                        text: (d: Annotation) => d.description,
                        fontFamily: "var(--header-font)",
                        fontSize: ANNOTATION_TEXT_SIZE,
                        x: "startX",
                        y: 0,
                        dy: annotation.dy + ANNOTATION_LINE_HEIGHT,
                        dx: -1,
                        fill: "rgba(0, 0, 0, 0.5)",
                        stroke: "white",
                        textAnchor: "start",
                        lineAnchor: "bottom",
                    }),
                ]),

                // Annotation highlighted colored lines
                ...annotationSegments.map((points, i) => [
                    Plot.area(points, {
                        x1: "x",
                        y1: "y",
                        y2: -annotationRuleLength,
                        fill: annotations[i].color,
                        fillOpacity: 0.2,
                    }),
                    Plot.lineY(points, {
                        x: "x",
                        y: "y",
                        stroke: annotations[i].color,
                        strokeWidth: 3,
                    }),
                ]),

                // Labels for each peak
                Plot.text(peakLabels, {
                    text: "mitigation_type",
                    fontFamily: "var(--header-font)",
                    // fontWeight: "bold",
                    fontSize: 12,
                    textAnchor: "middle",
                    lineAnchor: "bottom",
                    x: "x",
                    y: "y",
                    dy: -8,
                    fill: "mitigation_type",
                    stroke: "white",
                    strokeWidth: 5,
                }),
            ]);

            return marks;
        }) as PointPlotProps<Point, "mitigation_type", F>["renderMarks"],
        [showAnnotations, params]
    );

    if (!modelRunData) {
        return null;
    }
    let { dt } = modelRunData;

    return (
        <PointPlot
            {...restProps}
            dataTable={dt.table}
            yLabel={restProps.yLabel || ""}
            groupBy="mitigation_type"
            colors={COLORS}
            extraConfig={extraConfig}
            renderMarks={renderMarks}
        />
    );
};

function getPeakLabels(
    dataByGroup: DataByGroupMap<Point, "mitigation_type">,
    xScale: Plot.Scale,
    yScale: Plot.Scale
): Point[] {
    let unmitigatedPoints = dataByGroup.get("Unmitigated");
    let mitigatedPoints = dataByGroup.get("Mitigated");

    if (!unmitigatedPoints) {
        return [];
    }

    let unmitigated = getPeakY(unmitigatedPoints);

    if (!mitigatedPoints) {
        return [unmitigated];
    }

    let mitigated = getPeakY(mitigatedPoints);

    let result = dodge({
        a: mitigated,
        b: unmitigated,
        xScale,
        yScale,
        aWidth: 60,
        aHeight: 20,
        direction: "down",
        padding: 4,
    });

    return result.reverse();
}

interface Annotation {
    startX: number;
    endX: number;
    startY: number;
    endY: number;
    dy: number;
    description: string;
    color: string;
}

function getAnnotations({
    params,
    dataByGroup,
    xScale,
}: {
    params: Parameters;
    dataByGroup: DataByGroupMap<Point, "mitigation_type">;
    xScale: Plot.Scale;
}): {
    annotations: Array<Annotation>;
    annotationSegments: Point[][];
} {
    const mitigatedData = dataByGroup.get("Mitigated");
    if (!mitigatedData) return { annotations: [], annotationSegments: [] };
    const annotations: Array<Annotation> = [];

    const tryAddAnnotation = (
        startX: number,
        endX: number,
        description: string,
        color: string,
        mitigationName: string
    ) => {
        const lastDay = mitigatedData[mitigatedData.length - 1].x;
        const startPoint = mitigatedData.find((d) => d.x === startX);
        const endPoint = mitigatedData.find(
            (d) => d.x === Math.min(endX, lastDay)
        );

        if (startPoint && endPoint) {
            annotations.push({
                startX,
                endX,
                dy: ANNOTATION_VERTICAL_LINE_LENGTH + ANNOTATION_TEXT_SIZE + 2,
                startY: startPoint.y,
                endY: endPoint.y,
                description,
                color,
            });
        } else {
            console.warn(
                `Could not find start or end point for ${mitigationName} mitigation`
            );
        }
    };

    const { vaccine, community } = params.mitigations;

    if (vaccine.enabled) {
        // TODO off by 1?
        const startX = vaccine.start + 1;
        let endX = 0.0;

        if (vaccine.doses === 1 || vaccine.p_get_2_doses === 0.0) {
            endX = Math.ceil(
                startX + vaccine.doses_available / vaccine.administration_rate
            );
        } else if (vaccine.doses === 2 && vaccine.p_get_2_doses > 0.0) {
            endX =  Math.ceil(
                startX + vaccine.dose2_delay + vaccine.doses_available / vaccine.administration_rate
            );
        }

        tryAddAnnotation(
            startX,
            endX,
            `${shortNumber(vaccine.doses_available)} vaccines administered`,
            "var(--purple)",
            "vaccine"
        );
    }

    if (community.enabled) {
        // TODO off by 1?
        const startX = community.start + 1;
        const endX = startX + community.duration;
        tryAddAnnotation(
            startX,
            endX,
            `Community mitigation`,
            "var(--pink)",
            "community"
        );
    }

    annotations.sort((a, b) => a.startX - b.startX);

    // Now check for collisions and adjust the textY position
    for (let i = 0; i < annotations.length - 1; i++) {
        const current = annotations[i];
        const next = annotations[i + 1];
        if (!next) {
            continue;
        }

        let widthEstimate = current.description.length * 8;
        if (
            Math.abs(next.startX - current.startX) <
            xScale.invert?.(widthEstimate)
        ) {
            next.dy += ANNOTATION_LINE_HEIGHT * 2;
        }
    }

    const annotationSegments: Point[][] = annotations.map(() => []);
    for (let p of mitigatedData) {
        annotations.forEach((annotation, i) => {
            if (p.x >= annotation.startX && p.x <= annotation.endX) {
                annotationSegments[i].push(p);
            }
        });
    }

    return { annotations, annotationSegments };
}

function shortNumber(n: number): string {
    if (n >= 1_000_000) {
        return `${(n / 1_000_000).toFixed(1)}M`;
    }
    if (n >= 1_000) {
        return `${Math.round(n / 1_000)}K`;
    }
    return n.toLocaleString("en-US");
}
