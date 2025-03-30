import { useMemo } from "react";
import { useParams } from "../ModelState";
import "./SummaryTable.css";
import { MitigationType, OutputType } from "@wasm/wasm_dynode";
import { useModelRunData } from "../state/modelRuns";
import { ColumnTable, op } from "arquero";

function formatted(n: number): string {
    return n.toLocaleString("en-US");
}

function SummaryTableInner({
    title,
    outputType,
}: {
    title: string;
    outputType: OutputType;
}) {
    let [params] = useParams();
    let groupLabels = params.population_fraction_labels;
    let { dt, mitigation_types } = useModelRunData();

    let addPrevented =
        (mitigation_types?.includes("Unmitigated") &&
            mitigation_types?.includes("Mitigated")) ||
        false;

    // Transpose data
    let summaries = useMemo(() => {
        if (!dt || !mitigation_types) {
            return null;
        }
        let addPrevented =
            mitigation_types.includes("Unmitigated") &&
            mitigation_types.includes("Mitigated");
        return computeSummaryRows(dt, outputType, addPrevented, groupLabels);
    }, [dt, outputType, mitigation_types]);

    if (!summaries || !mitigation_types) return null;

    return (
        <div className="summary-table-container mb-3">
            <h3 className="mb-1">{title}</h3>
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
                            <tr key={summary.group}>
                                <td>{summary.group}</td>
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
    let { dt } = useModelRunData();
    if (!dt) return null;
    return (
        <div className="summaries">
            <SummaryTableInner
                title="Infection Incidence"
                outputType="InfectionIncidence"
            />
            <SummaryTableInner
                title="Hospitalization Incidence"
                outputType="HospitalIncidence"
            />
        </div>
    );
}

type SummaryRow = {
    group: string;
    total: number;
    prevented?: number;
    prevent_pct?: number;
} & { [key in MitigationType]: number };

function computeSummaryRows(
    dt: ColumnTable,
    outputType: OutputType,
    addPrevented: boolean,
    groupLabels: string[]
): SummaryRow[] | null {
    let grouped = dt
        .params({ outputType, groupLabels })
        // @ts-expect-error d and & are untyped
        .filter((d, $) => d.output_type === $.outputType)
        .groupby("group", "mitigation_type")
        .rollup({
            value: op.sum("value"),
        })

        .derive({
            // @ts-expect-error d is untyped
            value: (d) => Math.round(d.value / 1000) * 1000,
            // @ts-expect-error d is untyped
            group: (d, $) => $.groupLabels[d.group],
        });

    let totals = grouped
        .groupby("mitigation_type")
        .rollup({
            value: op.sum("value"),
        })
        .derive({ group: () => "All" });

    let result: SummaryRow[] = totals
        .concat(grouped)
        .groupby("group")
        .pivot("mitigation_type", { value: op.sum("value") })
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
