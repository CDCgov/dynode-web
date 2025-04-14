import "./EpiCurve.css";
import { MitigationPlot } from "../plots/MitigationPlot";
import { useParams } from "../ModelState";
import { Point, useModelRunData } from "../state/modelRuns";
import { match } from "../utils";
import { OutputType } from "@wasm/wasm_dynode";
import { useCallback } from "react";

export function EpiCurve() {
    let [params] = useParams();
    let modelRunData = useModelRunData();
    let groupIdLabel = useCallback(
        (groupId: number) => params.population_fraction_labels[groupId],
        [params]
    );
    if (!modelRunData) {
        return null;
    }
    let { mitigation_types } = modelRunData;

    let hasMitigations = mitigation_types.includes("Mitigated");
    return (
        <>
            <section className="mb-3">
                <h3 className="mb-1">
                    {hasMitigations
                        ? "Mitigated v.s. Unmitigated Scenario"
                        : "Unmitigated Scenario"}
                </h3>
                <h4 className="mb-1">Overall Infection Incidence</h4>
                <MitigationPlot
                    yLabel="Incidence"
                    aspectRatio={0.5}
                    ticks={10}
                    filter={infectionIncidence}
                    annotations={hasMitigations}
                />
                <MitigationPlot
                    yLabel="Incidence"
                    facetBy="output_type"
                    filter={notInfectionIncidence}
                    facetLabel={outputTypeLabel}
                />
            </section>
            <section className="mb-3">
                <h3 className="mb-1">Infection Incidence by Age Group</h3>
                <MitigationPlot
                    filter={infectionIncidence}
                    facetBy="age_group"
                    facetLabel={groupIdLabel}
                    singleYAxis
                />
            </section>
        </>
    );
}

function infectionIncidence(d: Point): boolean {
    return d.output_type === "InfectionIncidence";
}

function notInfectionIncidence(d: Point): boolean {
    return d.output_type !== "InfectionIncidence";
}

function outputTypeLabel(outputType: OutputType): string {
    return match(outputType, [
        ["HospitalIncidence", () => "Hospitalizations"],
        ["DeathIncidence", () => "Deaths"],
        ["InfectionIncidence", () => "Infections"],
        ["SymptomaticIncidence", () => "Symptomatic Infections"],
    ]);
}
