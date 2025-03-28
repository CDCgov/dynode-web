import { useMemo } from "react";
import { useModelResult, useParams } from "../ModelState";
import "./SummaryTable.css";
import { ModelRunType, OutputType, SEIRModelOutput } from "@wasm/wasm_dynode";

function summarize(
    modelResult: SEIRModelOutput,
    outputType: OutputType
): number[] {
    return modelResult[outputType].reduce((acc, { grouped_values }) => {
        grouped_values.forEach((v, i) => {
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
function SummaryTableInner({
    title,
    outputType,
}: {
    title: string;
    outputType: OutputType;
}) {
    let [params] = useParams();
    let groups = params.population_fraction_labels;
    let { modelResult } = useModelResult();

    // Transpose data
    const { labels, tableData } = useMemo(() => {
        if (!modelResult) return { labels: [], tableData: [] };

        const summaries = modelResult.types.map((label) => ({
            label,
            values: summarize(modelResult.runs[label], outputType),
        }));

        const labels: Array<ModelRunType | "Prevented"> = summaries.map(
            (s) => s.label
        );

        let addDiff =
            labels.length === 2 &&
            labels[0] === "Unmitigated" &&
            labels[1] === "Mitigated";

        if (addDiff) {
            labels.push("Prevented");
        }

        const tableData = groups.map((group, rowIdx) => {
            const row = summaries.map((s) => rounded(s.values[rowIdx]));
            if (addDiff) {
                row.push(rounded(row[0]) - rounded(row[1]));
            }
            return { group, values: row };
        });

        return { labels, tableData };
    }, [modelResult, groups, outputType]);

    return (
        <div className="summary-table-container mb-3">
            <h3 className="mb-1">{title}</h3>
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

export function SummaryTable() {
    let { modelResult } = useModelResult();
    if (!modelResult) return null;
    return (
        <div>
            <SummaryTableInner
                title="Infection Incidence"
                outputType="infection_incidence"
            />
            <SummaryTableInner
                title="Hospitalization Incidence"
                outputType="hospital_incidence"
            />
        </div>
    );
}
