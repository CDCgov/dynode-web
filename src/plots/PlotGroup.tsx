import { useParams } from "../ModelState";
import { CategorizedResult, SEIRPlot, SEIRPlotProps } from "./SEIRPlot";
type PlotGroupProps = Omit<SEIRPlotProps, "results"> & {
    groups: Array<Array<CategorizedResult>>;
};

export function PlotGroup({ groups, ...otherProps }: PlotGroupProps) {
    let [params] = useParams();
    let labels = params.population_fraction_labels;
    const yValues = groups
        .map((results) =>
            results.map((item) => item.values.map((v) => v.value))
        )
        .flat(2);
    const yDomain: [number, number] = [
        Math.min(...yValues),
        Math.max(...yValues),
    ];

    return (
        <>
            {groups.map((results, i) => (
                <div key={i}>
                    <h4 className="mb-1">{labels[i]}</h4>
                    <SEIRPlot
                        key={i}
                        results={results}
                        yDomain={yDomain}
                        {...otherProps}
                    />
                </div>
            ))}
        </>
    );
}
