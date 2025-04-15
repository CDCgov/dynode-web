import { useEffect, useState } from "react";
import { PerfTools, PerfStats, MEASURES } from "../utils/Perf";
import { SelectInput } from "../forms/SelectInput";
import { MitigationPlot } from "../plots/MitigationPlot";
import { Point, useModelRunData } from "../state/modelRuns";

const PRECISION = 1;
const FILTER_OPTIONS = Object.keys(MEASURES).map((track) => ({
    value: track,
    label: track,
}));

function getDesc(stat: PerfStats): string {
    const track = stat.track as keyof typeof MEASURES;
    const measures = MEASURES[track];

    if (!measures || !(stat.name in measures)) {
        return "";
    }

    return measures[stat.name as keyof typeof measures];
}

export function DevInfo() {
    let modelRunData = useModelRunData();
    let [isEnabled, setIsEnabled] = useState(PerfTools.isEnabled());
    let [perfStats, setPerfStats] = useState<PerfStats[]>([]);
    let [activeTracks, setActiveTracks] = useState<string[]>([]);
    useEffect(() => {
        PerfTools.setEnabled(isEnabled);
        if (!isEnabled) {
            PerfTools.clear();
        }
        setPerfStats(PerfTools.stats());
    }, [modelRunData, isEnabled]);

    return (
        <div>
            <TestPlot />
            <div
                style={{
                    display: "flex",
                    fontSize: 12,
                    gap: 10,
                    alignItems: "end",
                }}
            >
                <div style={{ width: 500 }}>
                    <label>Filter probes</label>
                    <SelectInput
                        colorTheme="light"
                        value={FILTER_OPTIONS.filter((o) =>
                            activeTracks.includes(o.value)
                        )}
                        isMulti={true}
                        options={FILTER_OPTIONS}
                        onChange={(selected) => {
                            if (!selected) {
                                setActiveTracks([]);
                                return;
                            }
                            setActiveTracks(
                                (selected as typeof FILTER_OPTIONS).map(
                                    (o) => o.value
                                )
                            );
                        }}
                    />
                </div>
                <div>
                    <button onClick={() => setIsEnabled(!isEnabled)}>
                        {isEnabled ? "Disable" : "Enable"}
                    </button>
                </div>
                <div>
                    <button onClick={() => setPerfStats(PerfTools.stats())}>
                        Flush
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            PerfTools.clear();
                            setPerfStats(PerfTools.stats());
                        }}
                    >
                        Clear
                    </button>
                </div>
            </div>

            <table className="summary-table">
                <thead>
                    <tr>
                        <th>Probe</th>
                        <th>Mean</th>
                        <th>Min</th>
                        <th>Max</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {perfStats
                        .filter(
                            (stat) =>
                                activeTracks.length === 0 ||
                                activeTracks.includes(stat.track)
                        )
                        .map((stat) => (
                            <tr key={stat.track + stat.name}>
                                <td title={getDesc(stat)}>
                                    {stat.track}.{stat.name}
                                </td>
                                <td>{stat.mean.toFixed(PRECISION)}</td>
                                <td>{stat.min.toFixed(PRECISION)}</td>
                                <td>{stat.max.toFixed(PRECISION)}</td>
                                <td>{stat.count}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

function TestPlot() {
    return (
        <div style={{ width: 500, height: 300 }}>
            <h2>Test Plot</h2>
            <MitigationPlot
                yLabel="Incidence"
                aspectRatio={0.5}
                ticks={10}
                filter={infectionIncidence}
                annotations={false}
            />
        </div>
    );
}

function infectionIncidence(d: Point): boolean {
    return d.output_type === "InfectionIncidence";
}
