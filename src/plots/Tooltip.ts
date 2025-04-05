import { Plot } from "@observablehq/plot";
import { from } from "arquero";
import { bisector, Bisector, pointer, select, Selection } from "d3";

const DEFAULT_STYLE: Partial<CSSStyleDeclaration> = {
    backgroundColor: "white",
    zIndex: "1000",
    borderRadius: "3px",
    boxShadow: "0 2px 6px rgba(44, 44, 44, 0.2)",
    padding: "10px",
};

interface TooltipOptions<P> {
    points?: P[];
    pointMap?: Map<number, P[]>;
    containerEl: HTMLElement;
    plot: (HTMLElement | SVGElement) & Plot;
    xProperty: keyof P & (string | number);
    yProperty: keyof P & (string | number);
    getColor: (d: P) => string;
    renderContent: (
        x: number,
        points: P[] | undefined,
        tooltipEl: HTMLElement
    ) => void;
    yRange?: [number, number];
    tooltipWidth?: number;
    style?: Partial<CSSStyleDeclaration> | null;
    margin?: number;
}

export class Tooltip<P> {
    public tooltipEl: HTMLElement;

    private node: SVGElement;
    private plotSelection: Selection<SVGElement, unknown, null, undefined>;
    private xScale: (x: number) => number;
    private xScaleInverted: (x: number) => number;
    private yScale: (y: number) => number;
    private getColor: (d: P) => string;
    private xProperty: keyof P & (string | number);
    private yProperty: keyof P & (string | number);
    private bisector: Bisector<number, number>;
    private xValues: number[];
    private pointMap: Map<number, P[]>;
    private focusLineStartY: number;
    private focusLineEndY: number;
    private tooltipWidth: number;
    private renderContent: (
        x: number,
        points: P[] | undefined,
        tooltipEl: HTMLElement
    ) => void;
    private containerEl: HTMLElement;
    private focusLine: Selection<SVGLineElement, unknown, null, undefined>;
    private focusDots: Selection<SVGGElement, unknown, null, undefined>;
    private margin: number;
    private trackEnter: boolean;
    private style: Partial<CSSStyleDeclaration> | null;

    constructor({
        containerEl,
        plot,
        xProperty,
        yProperty,
        getColor,
        points,
        pointMap,
        margin = 15,
        tooltipWidth = 200,
        renderContent,
        style = DEFAULT_STYLE,
    }: TooltipOptions<P>) {
        let xScale = plot.scale("x");
        let yScale = plot.scale("y");
        this.getColor = getColor;

        if (!xScale || !xScale.invert) {
            throw new Error("You must provide a x scale with invert");
        }
        if (!yScale || !(yScale.range instanceof Array)) {
            throw new Error(
                "You must provide a yScale range as an array or a yRange"
            );
        }
        this.xScale = (n) => xScale.apply(n);
        this.xScaleInverted = (n) => xScale.invert && xScale.invert(n);
        this.yScale = (n) => yScale.apply(n);

        this.xProperty = xProperty;
        this.yProperty = yProperty;

        let focusLineCoords = [
            yScale.range[0],
            yScale.range[yScale.range.length - 1],
        ];

        if (plot instanceof SVGElement) {
            this.node = plot;
            this.plotSelection = select(plot as SVGElement);
        } else {
            let node = plot.querySelector<SVGElement>("svg[class^='plot']");
            if (!node) {
                throw new Error("No svg found");
            }
            this.node = node;
            this.plotSelection = select(node);
        }

        this.bisector = bisector((d) => d);

        this.pointMap =
            pointMap ||
            // @ts-expect-error Map is not typed correctly
            (from(points)
                .groupby(this.xProperty)
                .objects({ grouped: true }) as Map<number, P[]>);
        this.xValues = [...this.pointMap.keys()];
        this.focusLineStartY = focusLineCoords[0];
        this.focusLineEndY = focusLineCoords[1];
        this.tooltipWidth = tooltipWidth;

        this.margin = margin;
        this.renderContent = renderContent;

        this.onPointerEnter = this.onPointerEnter.bind(this);
        this.onPointerMove = this.onPointerMove.bind(this);
        this.onPointerLeave = this.onPointerLeave.bind(this);

        this.containerEl = containerEl;
        this.tooltipEl = document.createElement("div");
        this.tooltipEl.className = "tooltip";
        this.containerEl.appendChild(this.tooltipEl);
        this.focusLine = this.plotSelection.append("line");
        this.focusDots = this.plotSelection.append("g");

        this.trackEnter = false;

        this.style = style;

        // Needs to be re-run when points changes
        this.setup();
    }

    setup() {
        this.tooltipEl.style.position = "fixed";
        this.tooltipEl.style.width = `${this.tooltipWidth}px`;
        this.tooltipEl.style.display = "none";
        this.tooltipEl.style.pointerEvents = "none";

        if (this.style && this.style !== null) {
            Object.assign(this.tooltipEl.style, this.style);
        }

        this.focusLine
            .attr("stroke-width", 1)
            .attr("stroke", "rgba(0, 0, 0, 0.2)")
            .attr("y1", this.focusLineStartY)
            .attr("y2", this.focusLineEndY)
            .style("display", "none");

        this.node.addEventListener("pointerenter", this.onPointerEnter);
        this.node.addEventListener("pointermove", this.onPointerMove);
        this.node.addEventListener("pointerleave", this.onPointerLeave);
    }

    cleanup() {
        this.tooltipEl.remove();
        this.node.removeEventListener("pointerenter", this.onPointerEnter);
        this.node.removeEventListener("pointermove", this.onPointerMove);
        this.node.removeEventListener("pointerleave", this.onPointerLeave);
    }

    show() {
        this.tooltipEl.style.display = "";
        this.focusLine.style("display", "");
        this.trackEnter = true;
    }

    render(event: PointerEvent) {
        if (!this.trackEnter) {
            this.show();
        }
        const [x] = pointer(event);
        const index = this.bisector.center(
            this.xValues,
            this.xScaleInverted(x)
        );
        const nearestX = this.xValues[index];
        const pointsAtX = this.pointMap.get(nearestX);

        // this.tooltipEl.innerText = "";
        this.renderContent(nearestX, pointsAtX, this.tooltipEl);

        let left = event.clientX + this.margin;
        let top = event.clientY;
        let overlapX = this.tooltipWidth + left - window.innerWidth;
        let overlapY = this.tooltipEl.clientHeight + top - window.innerHeight;

        this.tooltipEl.style.left = `${Math.min(left, left - overlapX)}px`;
        this.tooltipEl.style.top = `${Math.min(top, top - overlapY)}px`;

        this.focusDots.selectAll("circle").remove();
        if (pointsAtX) {
            this.focusDots
                .selectAll("circle")
                .data(pointsAtX)
                .enter()
                .append("circle")
                .attr("cx", (d) => this.xScale(d[this.xProperty] as number))
                .attr("cy", (d) => this.yScale(d[this.yProperty] as number))
                .attr("r", 3)
                .attr("fill", "white")
                .attr("stroke-width", 2)
                .attr("stroke", (d) => this.getColor(d));
        }

        this.focusLine.attr(
            "transform",
            `translate(${this.xScale(nearestX)},0)`
        );
    }

    onPointerEnter(event: PointerEvent) {
        this.show();
        if (event.pointerType === "touch") {
            this.render(event);
        }
    }

    onPointerMove(event: PointerEvent) {
        this.render(event);
    }

    onPointerLeave() {
        this.focusDots.selectAll("circle").remove();
        this.tooltipEl.style.display = "none";
        this.focusLine.style("display", "none");
    }
}
