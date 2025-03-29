import { useMemo } from "react";
import { useParams } from "../ModelState";
import "./SummaryTable.css";
import { MitigationType, OutputType } from "@wasm/wasm_dynode";
import { useModelRunData } from "../state/modelRuns";
import { ColumnTable, op } from "arquero";

function rounded(n: number): number {
    return Math.round(n / 1000) * 1000;
}
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
    let groups = params.population_fraction_labels;
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
        return computeSummaryRows(dt, outputType, addPrevented);
    }, [dt, outputType]);

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
                        {addPrevented && <th>Prevented</th>}
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {summaries.map((summary) => {
                        return (
                            <tr key={summary.group}>
                                <td>{groups[summary.group]}</td>
                                {mitigation_types.map((label) => {
                                    let sum = summary[label];
                                    return (
                                        <td key={label}>
                                            {formatted(rounded(sum))}
                                        </td>
                                    );
                                })}
                                {summary.prevented !== undefined && (
                                    <td>
                                        {formatted(rounded(summary.prevented))}
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
        <div>
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
    group: number;
    total: number;
    prevented?: number;
} & { [key in MitigationType]: number };

function computeSummaryRows(
    dt: ColumnTable,
    outputType: OutputType,
    addPrevented: boolean
): SummaryRow[] | null {
    let result: SummaryRow[] = dt
        .params({ outputType })
        // @ts-expect-error d and & are untyped
        .filter((d, $) => d.output_type === $.outputType)
        .groupby("group")
        .pivot("mitigation_type", { value: op.sum("value") })
        .objects() as SummaryRow[];

    if (addPrevented) {
        result.forEach((summary) => {
            let unmitigated = summary["Unmitigated"];
            let mitigated = summary["Mitigated"];
            summary.prevented = unmitigated - mitigated;
        });
    }
    return result;
}
