import { useMemo } from "react";
import { useModelResult, useParams } from "../ModelState";
import "./SummaryTable.css";
import { SEIRModelOutput } from "@wasm/wasm_dynode";

function summarize(modelResult: SEIRModelOutput): number[] {
    return modelResult.infection_incidence.reduce((acc, { value }) => {
        value.forEach((v, i) => {
            acc[i] = (acc[i] || 0) + v;
        });
        return acc;
    }, [] as number[]);
}

function rounded(n: number): number {
    return Math.round(n / 1000) * 1000;
}
function formatted(n: number): string {
    return n.toLocaleString("en-US");
}
export function SummaryTable() {
    let [params] = useParams();
    let groups = params.population_fraction_labels;
    let { modelResult } = useModelResult();

    // Transpose data
    const { labels, tableData } = useMemo(() => {
        if (!modelResult) return { labels: [], tableData: [] };

        const summaries = Object.entries(modelResult).map(([key, value]) => ({
            label: key,
            values: summarize(value),
        }))

        const labels = summaries.map((s) => s.label);

        let addDiff =
            labels.length === 2 &&
            labels[0] === "unmitigated" &&
            labels[1] === "mitigated";

        if (addDiff) {
            labels.push("prevented");
        }

        const tableData = groups.map((group, rowIdx) => {
            const row = summaries.map((s) => rounded(s.values[rowIdx]));
            if (addDiff) {
                row.push(rounded(row[0]) - rounded(row[1]));
            }
            return { group, values: row };
        });

        return { labels, tableData };
    }, [modelResult, groups]);

    return (
        <div className="summary-table-container mb-2">
            <h3 className="mb-1">Total Infection Incidence</h3>
            <table className="summary-table">
                <thead>
                    <tr>
                        <th>Age group</th>
                        {labels.map((label) => (
                            <th key={label}>{label}</th>
                        ))}
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(({ group, values }, i) => (
                        <tr key={i}>
                            <td>{group}</td>
                            {values.map((val, j) => (
                                <td className={labels[j]} key={j}>
                                    {formatted(val)}
                                </td>
                            ))}

                            <td />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
