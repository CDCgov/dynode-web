import "./Label.css";
import {
    ParameterEditorConfig,
    ParameterPath,
} from "../config/parameters.config";
import { useEffect, useRef, useState } from "react";

interface LabelProps {
    parameter?: ParameterPath;
}

export function Label(props: LabelProps) {
    let paramConfig =
        props.parameter && ParameterEditorConfig.getConfig(props.parameter);

    let tooltip = paramConfig?.tooltip;
    const iconRef = useRef<HTMLDivElement | null>(null);
    const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
    let isHovered = pos !== null;
    useEffect(() => {
        let onScroll = () => {
            setPos(null);
        };
        if (isHovered) {
            document.addEventListener("scroll", onScroll, true);
        }
        return () => {
            document.removeEventListener("scroll", onScroll, true);
        };
    }, [isHovered]);

    if (!paramConfig?.label) {
        return null;
    }
    const handleMouseEnter = () => {
        const rect = iconRef.current?.getBoundingClientRect();
        if (rect) {
            setPos({
                top: rect.bottom + 5,
                left: (rect.left + rect.right) / 2,
            });
        }
    };

    const handleMouseLeave = () => {
        setPos(null);
    };

    return (
        <label>
            {paramConfig.label}{" "}
            {tooltip && (
                <div
                    ref={iconRef}
                    className="hint-icon"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    ?
                </div>
            )}
            {pos && tooltip && (
                <div className="hint-tooltip" style={pos}>
                    {tooltip}
                </div>
            )}
        </label>
    );
}
