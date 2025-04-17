import { useState } from "react";
import { Caret } from "./Caret";
import "./MiniExpandable.css";
import {
    ParameterEditorConfig,
    ParameterPath,
} from "../config/parameters.config";

type MiniExpandableProps = {
    title: string;
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
    let tooltip =
        parameter && ParameterEditorConfig.getConfig(parameter)?.tooltip;
    return (
        <div>
            <div
                className="mini-expandable-header"
                title={tooltip}
                onClick={() => setExpanded(!expanded)}
            >
                <Caret dir={expanded ? "down" : "left"} /> {title}
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
