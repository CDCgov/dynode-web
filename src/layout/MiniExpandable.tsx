import { useState } from "react";
import { Caret } from "./Caret";
import "./MiniExpandable.css";
import { ParameterPath } from "../config/parameters.config";
import { Label } from "../forms/Label";

type MiniExpandableProps = {
    title?: string;
    parameter?: ParameterPath;
    initialState: boolean;
    children: React.ReactNode;
};

export function MiniExpandable({
    title,
    parameter,
    initialState,
    children,
}: MiniExpandableProps) {
    const [expanded, setExpanded] = useState(initialState);
    return (
        <div>
            <div
                className="mini-expandable-header"
                onClick={() => setExpanded(!expanded)}
            >
                <Caret dir={expanded ? "down" : "left"} />
                {title ? (
                    <label>{title}</label>
                ) : (
                    <Label parameter={parameter} />
                )}
            </div>
            <div
                className="mini-expandable-content"
                style={{ display: expanded ? "" : "none" }}
            >
                {children}
            </div>
        </div>
    );
}
