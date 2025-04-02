import { Annotation, SEIRPlot } from "../plots/SEIRPlot";
// import { SelectInput } from "../forms/SelectInput";

import "./EpiCurve.css";
import { Point, useModelRunData } from "../state/modelRuns";
import { op } from "arquero";
import { PlotGroup } from "../plots/PlotGroup";
import { useMemo } from "react";
import { SummaryTable } from "./SummaryTable";
import { useParams } from "../ModelState";
import { entries } from "../utils";
import {
    CommunityMitigationParamsExport,
    VaccineParams,
} from "@wasm/wasm_dynode";

export function EpiCurve() {
    let [params] = useParams();
    const { dt, mitigation_types } = useModelRunData();
    let { d1, d2, maxY, annotations } = useMemo(() => {
        if (!dt) return { mainData: null, groupedData: null, maxY: null };
        let infectionData = dt.filter(
            (d) => d.output_type === "InfectionIncidence"
        );
        let maxY = dt
            .filter((d) => d.output_type === "InfectionIncidence")
            .rollup({ max: op.max("value") })
            .get("max");
        let _d1 = infectionData
            .groupby("day", "mitigation_type")
            .rollup({ sum: op.sum("value") })
            .select({
                day: "x",
                sum: "y",
                mitigation_type: "mitigation_type",
            })
            .objects();
        let _d2 = infectionData
            .groupby("group")
            .select({
                day: "x",
                value: "y",
                mitigation_type: "mitigation_type",
            })
            .objects({ grouped: true }) as unknown;

        let d1 = _d1 as Point[];
        let d2 = _d2 as Map<number, Point[]>;

        let annotations: Array<Annotation> = entries(params.mitigations)
            .map(([label, value]) => {
                if (!value.enabled) return;
                if (label == "vaccine") {
                    let { start } = value as VaccineParams;
                    return {
                        label: "Vaccination",
                        color: "var(--purple)",
                        x: start,
                    };
                } else if (label == "community") {
                    let { start, duration } =
                        value as CommunityMitigationParamsExport;
                    return [
                        {
                            label: "Community",
                            color: "var(--dark-purple)",
                            x: start,
                        },
                        {
                            label: "Community ends",
                            color: "var(--dark-purple)",
                            x: start + duration,
                        },
                    ];
                }
            })
            .filter((x) => x !== undefined)
            .flat();
        return { d1, d2, maxY, annotations };
    }, [dt, params]);

    return (
        <>
            <h3 className="mb-1">Infection Incidence</h3>
            <div className="mb-4">
                {d1 && mitigation_types && (
                    <SEIRPlot
                        data={d1}
                        group_by="mitigation_type"
                        yLabel="Infection Incidence"
                        annotations={annotations}
                        showLegend={mitigation_types.length > 1}
                    />
                )}
            </div>

            <h3 className="mb-1">By Age Group</h3>
            <div className="mb-4">
                <div className="row-2">
                    {d2 && (
                        <PlotGroup
                            maxY={maxY}
                            groups={d2}
                            group_by="mitigation_type"
                            yTicks={5}
                            showLegend={false}
                            yLabel={"Infection Incidence"}
                        />
                    )}
                </div>
            </div>

            <SummaryTable />
        </>
    );
}
