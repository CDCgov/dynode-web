import { entries, getUrlParam } from "../utils";

const PREFIX = "dw";
const DELIMITER = "::";
let isPerfEnabled = getUrlParam("perf") === "true";

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

type Track = keyof typeof MEASURES;
type Measure<T extends Track> = keyof (typeof MEASURES)[T] & string;

const markName = (track: string, measure: string, type: "start" | "end") =>
    `${PREFIX}${DELIMITER}${track}${DELIMITER}${measure}${DELIMITER}${type}`;

let statsCache: Record<string, Record<string, PerfStats>> = {};

export const PerfTools = {
    isEnabled() {
        return isPerfEnabled;
    },

    setEnabled(enabled: boolean) {
        isPerfEnabled = enabled;
    },

    start(track: Track, measure: Measure<Track>) {
        if (isPerfEnabled) {
            performance.mark(markName(track, measure, "start"));
        }
    },

    stop(track: Track, measure: Measure<Track>) {
        if (!isPerfEnabled) return;
        performance.measure(markName(track, measure, "end"), {
            start: markName(track, measure, "start"),
            detail: {
                devtools: {
                    dataType: "track-entry",
                    track,
                    trackGroup: "Dynode Web",
                },
            },
        });
    },

    stats(): PerfStats[] {
        const measures = performance.getEntriesByType("measure");
        const grouped: Record<string, Record<string, number[]>> = {};

        for (const { name, duration } of measures) {
            if (!name.startsWith(PREFIX)) continue;
            const [, track, measure] = name.split(DELIMITER);
            grouped[track] ??= {};
            grouped[track][measure] ??= [];
            grouped[track][measure].push(duration);
        }

        const result: PerfStats[] = [];

        for (const track in MEASURES) {
            for (const measure in MEASURES[track as Track]) {
                const durations = grouped[track]?.[measure] ?? [];
                const prev: PerfStats | undefined =
                    statsCache[track]?.[measure];

                if (durations.length === 0 && prev) {
                    result.push(prev);
                    continue;
                }
                if (durations.length === 0) continue;

                const durationSum = durations.reduce((a, b) => a + b, 0);
                const count = durations.length + (prev?.count ?? 0);
                const meanCurrent = durationSum / durations.length;
                const mean = prev
                    ? (meanCurrent * durations.length +
                          prev.mean * prev.count) /
                      count
                    : meanCurrent;
                const min = Math.min(...durations, prev?.min ?? Infinity);
                const max = Math.max(...durations, prev?.max ?? -Infinity);

                const stat = { track, name: measure, min, max, mean, count };
                statsCache[track] ??= {};
                statsCache[track][measure] = stat;
                result.push(stat);
            }
        }

        performance.clearMarks();
        performance.clearMeasures();
        return result;
    },

    clear() {
        statsCache = {};
        performance.clearMarks();
        performance.clearMeasures();
    },
};

export const Perf = Object.fromEntries(
    entries(MEASURES).map(([track, measures]) => [
        track,
        Object.fromEntries(
            entries(measures).map(([measure]) => [
                measure,
                {
                    start: () => PerfTools.start(track as Track, measure),
                    stop: () => PerfTools.stop(track as Track, measure),
                },
            ])
        ),
    ])
) as {
    [T in Track]: {
        [M in keyof (typeof MEASURES)[T]]: {
            start: () => void;
            stop: () => void;
        };
    };
};

export interface PerfStats {
    track: string;
    name: string;
    min: number;
    max: number;
    mean: number;
    count: number;
}
