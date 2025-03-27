import { useParams } from "../ModelState";
import { Point, SEIRPlot, SEIRPlotProps } from "./SEIRPlot";
type PlotGroupProps = Omit<SEIRPlotProps, "data"> & {
    groups: Point[][][];
};

export function PlotGroup({ groups, ...otherProps }: PlotGroupProps) {
    let [params] = useParams();
    let labels = params.population_fraction_labels;
    const yValues = groups
        .map((run) => run.map((points) => points.map((p) => p.y)))
        .flat(2);
    const yDomain: [number, number] = [
        Math.min(...yValues),
        Math.max(...yValues),
    ];

    return (
        <>
            {groups.map((group, i) => (
                <div key={i}>
                    <h4 className="mb-1">{labels[i]}</h4>
                    <SEIRPlot
                        key={i}
                        data={group}
                        yDomain={yDomain}
                        {...otherProps}
                    />
                </div>
            ))}
        </>
    );
}
