import { SEIRPlot } from "../plots/SEIRPlot";
// import { SelectInput } from "../forms/SelectInput";

import "./EpiCurve.css";
import { Point, useModelRunData } from "../state/modelRuns";
import { op } from "arquero";
import { PlotGroup } from "../plots/PlotGroup";
import { useMemo } from "react";
import { SummaryTable } from "./SummaryTable";

export function EpiCurve() {
    const { dt } = useModelRunData();
    let { d1, d2, maxY } = useMemo(() => {
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
        // TODO deal with the types being wrong in arquero
        let d1 = _d1 as Point[];
        let d2 = _d2 as Map<number, Point[]>;
        return { d1, d2, maxY };
    }, [dt]);

    return (
        <>
            <h3>Infection Incidence</h3>
            <div className="mb-4">
                {d1 && (
                    <SEIRPlot
                        data={d1}
                        group_by="mitigation_type"
                        yLabel="Infection Incidence"
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
