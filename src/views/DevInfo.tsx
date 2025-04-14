import { useEffect, useState } from "react";
import { getStats, PerfStats, MEASURES, clear } from "../utils/Perf";
import { SelectInput } from "../forms/SelectInput";

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
    let [perfStats, setPerfStats] = useState<PerfStats[]>([]);
    let [activeTracks, setActiveTracks] = useState<string[]>([]);
    useEffect(() => {
        setPerfStats(getStats());
    }, []);

    return (
        <div>
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
                    <button onClick={() => setPerfStats(getStats())}>
                        Recompute
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            clear();
                            setPerfStats(getStats());
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
                                <td>{stat.mean.toFixed(1)}</td>
                                <td>{stat.min.toFixed(1)}</td>
                                <td>{stat.max.toFixed(1)}</td>
                                <td>{stat.count}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
