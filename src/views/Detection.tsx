import { useModelRunData } from "../state/modelRuns";
import "./Detection.css";

export function Detection() {
    let modelRunData = useModelRunData();
    if (!modelRunData) {
        return null;
    }
    let { p_detect } = modelRunData;
    return (
        <div>
            <h3 className="mb-1">Detection</h3>
            <p>TODO</p>
        </div>
    );
}
