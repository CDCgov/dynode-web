import "./Caret.css";

export const Caret = ({
    dir,
    size = "16px",
}: {
    dir: "up" | "down" | "left" | "right";
    size?: string;
}) => {
    let rotation;
    switch (dir) {
        case "down":
            rotation = "0deg";
            break;
        case "up":
            rotation = "180deg";
            break;
        case "left":
            rotation = "270deg";
            break;
        case "right":
            rotation = "90deg";
            break;
        default:
            throw new Error(`Invalid direction: ${dir}`);
    }
    return (
        <span
            className="caret"
            style={{
                height: size,
                width: size,
                transform: `rotate(${rotation})`,
            }}
        >
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path
                    fill="var(--text)"
                    fillRule="evenodd"
                    d="M10.475 6.768a.5.5 0 0 1 0 .707L8.354 9.596 8 9.95l-.354-.354-2.12-2.121a.5.5 0 0 1 .706-.707L8 8.536l1.768-1.768a.5.5 0 0 1 .707 0"
                    clipRule="evenodd"
                ></path>
            </svg>
        </span>
    );
};
