import { useModelResult } from "../ModelState";
import { SEIRPlot } from "../plots/SEIRPlot";
// import { SelectInput } from "../forms/SelectInput";

import "./EpiCurve.css";
import { SummaryTable } from "./SummaryTable";
import { PlotGroup } from "../plots/PlotGroup";

export function EpiCurve() {
    const { isRunning, points } = useModelResult();
    return (
        <>
            <h3>Infection Incidence</h3>
            <div className="mb-4" style={{ opacity: isRunning ? "0.5" : "" }}>
                {points && (
                    <SEIRPlot
                        data={points.infection_incidence.byModelRun}
                        yLabel={"Infection Incidence"}
                    />
                )}
            </div>

            <h3 className="mb-1">By Age Group</h3>
            <div className="mb-4" style={{ opacity: isRunning ? "0.5" : "" }}>
                <div className="row-2">
                    {points && (
                        <PlotGroup
                            groups={points.infection_incidence.byGroup}
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
