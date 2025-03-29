import { useParams } from "../ModelState";
import { Point } from "../state/modelRuns";
import { SEIRPlot, SEIRPlotProps } from "./SEIRPlot";
type PlotGroupProps = Omit<SEIRPlotProps, "data"> & {
    groups: Map<number, Point[]>;
};

export function PlotGroup({ groups, ...otherProps }: PlotGroupProps) {
    let [params] = useParams();
    let labels = params.population_fraction_labels;
    return (
        <>
            {[...groups.entries()].map(([i, data]) => (
                <div key={i}>
                    <h4 className="mb-1">{labels[i]}</h4>
                    <SEIRPlot key={i} data={data} {...otherProps} />
                </div>
            ))}
        </>
    );
}
