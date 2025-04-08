import { useModelRunData } from "../state/modelRuns";
import "./Detection.css";

export function Detection() {
    let { p_detect } = useModelRunData();
    if (!p_detect) {
        return null;
    }
    return (
        <div>
            <h3 className="mb-1">Detection</h3>
            <p>TODO</p>
        </div>
    );
}
