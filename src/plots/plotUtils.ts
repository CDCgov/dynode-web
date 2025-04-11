import * as Plot from "@observablehq/plot";

export interface BasePoint {
    x: number;
    y: number;
}
export type ValidGroupKey<P> = {
    [K in keyof P]: K extends string
        ? P[K] extends string | number
            ? K
            : never
        : never;
}[keyof P];
export type DataByGroupMap<P, G extends keyof P> = Map<P[G], P[]>;
export type DataByXMap<P extends BasePoint> = Map<number, P[]>;

export function computeTickInfo(
    yLabel: string,
    maxY: number
): [string, (d: number) => string] {
    let tickFormat: (d: number) => string;
    if (maxY >= 1_000_000) {
        yLabel += " (Millions)";
        tickFormat = (d) => (d / 1_000_000).toFixed(1);
    } else if (maxY >= 10_000) {
        yLabel += " (Thousands)";
        tickFormat = (d) => (d / 1000).toFixed(0);
    } else {
        tickFormat = (d) => d.toLocaleString("en-US");
    }
    return [yLabel, tickFormat];
}

export const DEFAULT_COLORS = [
    "var(--black)",
    "var(--purple)",
    "var(--green)",
    "var(--red)",
    "var(--orange)",
    "var(--purple)",
    "var(--pink)",
    "var(--yellow)",
    "var(--brown)",
    "var(--cyan)",
];

export function getPeakY<P extends BasePoint>(points: P[]) {
    let peak = points.reduce((prev, curr) => {
        return prev.y > curr.y ? prev : curr;
    });
    return peak;
}

export function mapValues<K, V, V2>(
    input: Map<K, V>,
    fn: (value: V, key: K) => V2
): Map<K, V2> {
    return new Map(
        [...input].map(([key, value]) => [key, fn(value, key)] as [K, V2])
    );
}

type Direction = "left" | "right" | "up" | "down";

interface DodgeParams<P> {
    a: P;
    b: P;
    xScale: Plot.Scale;
    yScale: Plot.Scale;
    aWidth: number;
    aHeight: number;
    bWidth?: number;
    bHeight?: number;
    direction: Direction;
    padding?: number;
    xTolerance?: number;
    yTolerance?: number;
}

export function dodge<P extends BasePoint>({
    a,
    b,
    xScale,
    yScale,
    aWidth,
    aHeight,
    bWidth = aWidth,
    bHeight = aHeight,
    direction,
    padding = 1,
    xTolerance = 0,
    yTolerance = 0,
}: DodgeParams<P>): [P, P] {
    if (!xScale.invert || !yScale.invert) {
        throw new Error("xScale and yScale must have invert functions");
    }

    let aX = xScale.apply(a.x);
    let aY = yScale.apply(a.y);
    let bX = xScale.apply(b.x);
    let bY = yScale.apply(b.y);

    const isColliding = !(
        aX + aWidth + xTolerance <= bX ||
        aX >= bX + bWidth + xTolerance ||
        aY + aHeight + yTolerance <= bY ||
        aY >= bY + bHeight + yTolerance
    );

    if (!isColliding) {
        return [a, b];
    }

    let newBX = bX;
    let newBY = bY;

    switch (direction) {
        case "left":
            newBX = aX - bWidth - padding;
            break;
        case "right":
            newBX = aX + aWidth + padding;
            break;
        case "up":
            newBY = aY - bHeight - padding;
            break;
        case "down":
            newBY = aY + aHeight + padding;
            break;
        default:
            throw new Error(`Invalid direction: ${direction}`);
    }

    const movedB: P = {
        ...b,
        x: xScale.invert(newBX),
        y: yScale.invert(newBY),
    };
    return [a, movedB];
}

export function yDodge(
    y1: number,
    y2: number,
    yScale: Plot.Scale,
    threshold = 10
): [number, number] {
    let y1Scaled = yScale.apply(y1);
    let y2Scaled = yScale.apply(y2);
    let tooClose = Math.abs(y1Scaled - y2Scaled) < threshold;
    if (!tooClose || !yScale.invert || !yScale.range) {
        return [y1, y2];
    }
    return [
        yScale.invert(y1Scaled - threshold / 2),
        yScale.invert(y2Scaled + threshold / 2),
    ];
}
