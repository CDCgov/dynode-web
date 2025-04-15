import { useMemo } from "react";
import { useParams } from "../ModelState";
import "./SummaryTable.css";
import { MitigationType, OutputType } from "@wasm/wasm_dynode";
import { Point, useModelRunData } from "../state/modelRuns";
import { ColumnTable, op } from "arquero";

function formatted(n: number): string {
    return n.toLocaleString("en-US");
}

function SummaryTableInner({
    title,
    outputType,
}: {
    title: string;
    description: string;
    outputType: OutputType;
}) {
    let [params] = useParams();
    let groupLabels = params.population_fraction_labels;
    let modelRunData = useModelRunData();

    // Transpose data
    let results = useMemo(() => {
        if (!modelRunData) {
            return null;
        }
        let { dt, mitigation_types } = modelRunData;
        let addPrevented =
            mitigation_types.includes("Unmitigated") &&
            mitigation_types.includes("Mitigated");
        return {
            addPrevented,
            summaries: computeSummaryRows(
                dt.table,
                outputType,
                addPrevented,
                groupLabels
            ),
        };
    }, [outputType, modelRunData, groupLabels]);

    if (!results || !modelRunData) return null;
    let { addPrevented, summaries } = results;
    let { mitigation_types } = modelRunData;

    return (
        <div className="summary-table-container mb-3">
            <h4>{title}</h4>
            <table className="summary-table">
                <thead>
                    <tr>
                        <th>Age group</th>
                        {mitigation_types.map((label) => (
                            <th key={label}>{label}</th>
                        ))}
                        {addPrevented && (
                            <th
                                style={{
                                    color: "var(--dark-purple)",
                                    fontWeight: "bold",
                                }}
                            >
                                Prevented
                            </th>
                        )}
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {summaries.map((summary) => {
                        return (
                            <tr key={summary.age_group}>
                                <td>{summary.age_group}</td>
                                {mitigation_types.map((label) => {
                                    let sum = summary[label];
                                    return (
                                        <td key={label}>{formatted(sum)}</td>
                                    );
                                })}
                                {summary.prevented !== undefined && (
                                    <td>
                                        {summary.prevent_pct && (
                                            <Underbar
                                                pct={summary.prevent_pct}
                                                color="var(--dark-purple)"
                                            >
                                                {formatted(summary.prevented)}
                                            </Underbar>
                                        )}
                                    </td>
                                )}
                                <td />
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export function SummaryTable() {
    return (
        <div className="summaries">
            <SummaryTableInner
                title="Infections"
                description="Infections over the entire period"
                outputType="InfectionIncidence"
            />
            <SummaryTableInner
                title="Symptomatic Infections"
                description="Symptomatic infections over the entire period"
                outputType="SymptomaticIncidence"
            />
            <SummaryTableInner
                title="Hospitalizations"
                description="Hospital admissions over the entire period"
                outputType="HospitalIncidence"
            />
            <SummaryTableInner
                title="Deaths"
                description="Deaths over the entire period"
                outputType="DeathIncidence"
            />
        </div>
    );
}

type SummaryRow = {
    age_group: string;
    total: number;
    prevented?: number;
    prevent_pct?: number;
} & { [key in MitigationType]: number };

function computeSummaryRows(
    dt: ColumnTable,
    outputType: OutputType,
    addPrevented: boolean,
    groupLabels: string[]
): SummaryRow[] {
    let grouped = dt
        .params({ outputType, groupLabels })
        // @ts-expect-error d and & are untyped
        .filter((d, $) => d.output_type === $.outputType)
        .groupby("age_group", "mitigation_type")
        .rollup({
            y: op.sum("y"),
        })

        .derive({
            y: (d: Point) => Math.round(d.y / 1000) * 1000,
            // @ts-expect-error d and & are untyped
            age_group: (d, $) => $.groupLabels[d.age_group],
        });

    let totals = grouped
        .groupby("mitigation_type")
        .rollup({
            y: op.sum("y"),
        })
        .derive({ age_group: () => "All" });

    let result: SummaryRow[] = totals
        .concat(grouped)
        .groupby("age_group")
        .pivot("mitigation_type", { value: op.sum("y") })
        .objects() as SummaryRow[];

    if (addPrevented) {
        result.forEach((summary) => {
            let unmitigated = summary["Unmitigated"];
            let mitigated = summary["Mitigated"];
            summary.prevented = unmitigated - mitigated;
            summary.prevent_pct = (unmitigated - mitigated) / unmitigated;
        });
    }

    return result;
}

function Underbar({
    pct,
    color,
    children,
}: {
    pct?: number;
    color?: string;
    children: React.ReactNode;
}) {
    if (pct === undefined) return children;
    return (
        <div className="underbar-wrapper">
            {children}
            <div className="underbar">
                <div
                    className="underbar-bar"
                    style={{
                        width: `${pct * 100}%`,
                        backgroundColor: color || undefined,
                    }}
                />
            </div>
        </div>
    );
}
