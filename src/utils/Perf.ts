import { entries } from "../utils";

const isDev = process.env.NODE_ENV === "development";

const PREFIX = "dw";
const DELIMITER = "::";

export const MEASURES = {
    query: {
        build_table: "Building the table from model run data",
        run_query: "Reformat table using group by etc",
    },
    model: {
        run: "A single model run",
    },
    plot: {
        render: "Render the plot SVG",
    },
};

export type Track = keyof typeof MEASURES;
export type Measure<T extends Track> = keyof (typeof MEASURES)[T] & string;

export interface PerfStats {
    track: string;
    name: string;
    min: number;
    max: number;
    mean: number;
    count: number;
}

function measureName<T extends Track>(
    track: T,
    measure: Measure<T>,
    type: "start" | "end"
) {
    return `${PREFIX}${DELIMITER}${track}${DELIMITER}${measure}${DELIMITER}${type}`;
}

interface PerfObj {
    marks: Record<string, number>;
    start: (track: Track, measure: keyof (typeof MEASURES)[Track]) => void;
    stop: (track: Track, measure: keyof (typeof MEASURES)[Track]) => void;
    stats: () => PerfStats[];
    clear: () => void;
}

const PerfInternal: PerfObj = {
    marks: {},
    start(track, measure) {
        performance.mark(measureName(track, measure, "start"));
    },
    stop(track, measure) {
        performance.measure(measureName(track, measure, "end"), {
            start: measureName(track, measure, "start"),
            detail: {
                devtools: {
                    dataType: "track-entry",
                    track: track,
                    trackGroup: "Dynode Web",
                },
            },
        });
    },
    stats(): PerfStats[] {
        let byTrack = performance
            .getEntriesByType("measure")
            .reduce((acc, entry) => {
                console.log(entry);
                if (!entry.name.startsWith(PREFIX)) {
                    return acc;
                }
                let [, track, measure] = entry.name.split(DELIMITER);
                let duration = entry.duration;
                if (!acc[track]) {
                    acc[track] = {};
                }
                if (!acc[track][measure]) {
                    acc[track][measure] = [];
                }
                acc[track][measure].push(duration);
                return acc;
            }, {} as { [track: string]: { [measure: string]: number[] } });
        let stats: PerfStats[] = [];
        for (let track in byTrack) {
            for (let measure in byTrack[track]) {
                let durations = byTrack[track][measure];
                let min = Math.min(...durations);
                let max = Math.max(...durations);
                let mean =
                    durations.reduce((acc, val) => acc + val, 0) /
                    durations.length;
                stats.push({
                    track,
                    name: measure,
                    min,
                    max,
                    mean,
                    count: durations.length,
                });
            }
        }
        return stats;
    },
    clear() {
        performance.clearMarks();
        performance.clearMeasures();
    },
};

type PerfMethodMap = {
    [T in Track]: {
        [M in keyof (typeof MEASURES)[T]]: {
            start: () => void;
            stop: () => void;
        };
    };
};

const PerfExport: PerfMethodMap = Object.fromEntries(
    entries(MEASURES).map(([track, measures]) => {
        const typedTrack = track as Track;

        const measureEntries = entries(measures).map(([measure]) => {
            return [
                measure,
                isDev
                    ? {
                          start: () => {
                              PerfInternal.start(typedTrack, measure);
                          },
                          stop: () => {
                              PerfInternal.stop(typedTrack, measure);
                          },
                      }
                    : {
                          start: () => {},
                          stop: () => {},
                      },
            ];
        });
        return [typedTrack, Object.fromEntries(measureEntries)];
    })
) as PerfMethodMap;

// Export with proper typing
export const Perf: PerfMethodMap = PerfExport as PerfMethodMap;

export function getStats() {
    return PerfInternal.stats();
}

export function clear() {
    PerfInternal.clear();
}
