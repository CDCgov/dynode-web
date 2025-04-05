import "./EpiCurve.css";
import { SummaryTable } from "./SummaryTable";
import { MitigationPlot } from "../plots/MitigationPlot";
import { useParams } from "../ModelState";
import { useModelRunData } from "../state/modelRuns";
import { match } from "../utils";

export function EpiCurve() {
    let [params] = useParams();
    let { mitigation_types } = useModelRunData();

    let hasMitigations = mitigation_types?.includes("Mitigated");
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
                    aspectRatio={0.4}
                    ticks={10}
                    filter={(d) => d.output_type === "InfectionIncidence"}
                    annotations
                />
                <MitigationPlot
                    yLabel="Incidence"
                    facetBy="output_type"
                    filter={(d) => d.output_type !== "InfectionIncidence"}
                    facetLabel={(outputType) =>
                        match(outputType, [
                            ["HospitalIncidence", () => "Hospitalizations"],
                            ["DeathIncidence", () => "Deaths"],
                            // ["InfectionIncidence", () => "Infections"],
                            [
                                "SymptomaticIncidence",
                                () => "Symptomatic Infections",
                            ],
                        ])
                    }
                />
            </section>
            <section className="mb-3">
                <h3 className="mb-1">Infection Incidence by Age Group</h3>
                <MitigationPlot
                    filter={(d) => d.output_type === "InfectionIncidence"}
                    facetBy="age_group"
                    facetLabel={(groupId) =>
                        params.population_fraction_labels[groupId]
                    }
                    singleYAxis
                />
            </section>

            <SummaryTable />
        </>
    );
}
