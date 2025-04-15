import "./EpiCurve.css";
import { MitigationPlot } from "../plots/MitigationPlot";
import { useDays, useParams } from "../ModelState";
import { Point, useModelRunData } from "../state/modelRuns";
import { match } from "../utils";
import { OutputType, Parameters } from "@wasm/wasm_dynode";
import { useCallback } from "react";

export function EpiCurve() {
    let [days] = useDays();
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
    let mitigationSummary = mitigationSummaryMessage(days, params);

    return (
        <>
            <section className="mb-3">
                <h3>
                    {hasMitigations
                        ? "Mitigated v.s. Unmitigated Scenario"
                        : "Unmitigated Scenario"}
                </h3>
                <p className="subtitle">{mitigationSummary}</p>
                <h4>Overall Infection Incidence</h4>
                <MitigationPlot
                    yLabel="Incidence"
                    aspectRatio={0.5}
                    ticks={10}
                    filter={infectionIncidence}
                    annotations={true}
                />
                <MitigationPlot
                    yLabel="Incidence"
                    facetBy="output_type"
                    filter={notInfectionIncidence}
                    facetLabel={outputTypeLabel}
                />
            </section>
            <section className="mb-3">
                <h3>Infection Incidence by Age Group</h3>
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
function mitigationSummaryMessage(days: number, params: Parameters) {
    const entries = [
        [params.mitigations.vaccine.enabled, "vaccination"],
        [params.mitigations.antivirals.enabled, "antivirals"],
        [params.mitigations.community.enabled, "community mitigation"],
        [
            params.mitigations.ttiq.enabled,
            "testing, tracing, isolation, and quarantine",
        ],
    ] as const;

    let base = "";

    const mitigations = entries
        .filter(([enabled]) => enabled)
        .map(([, label]) => label);

    if (mitigations.length === 0) {
        base += "Given";
    } else if (mitigations.length === 1) {
        base += `Impact of ${mitigations[0]} on`;
    } else if (mitigations.length > 1) {
        const last = mitigations.pop();
        base += `Impact of ${mitigations.join(", ")}${
            mitigations.length > 1 ? "," : ""
        } and ${last} on`;
    }

    base += ` a population of ${params.population.toLocaleString(
        "en-US"
    )} over ${days} days`;

    return base;
}
