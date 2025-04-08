import { FormGroup } from "../forms/FormGroup";
import { MatrixInput } from "../forms/MatrixInput";
import { NumberInput } from "../forms/NumberInput";
import { MiniExpandable } from "../layout/MiniExpandable";
import { useDays, useMitigation, useParams } from "../ModelState";
import { CommunityMitigationParamsExport } from "@wasm/wasm_dynode";

export function CommunityEditor() {
    let [{ start, duration, effectiveness }, updateParams] =
        useMitigation<CommunityMitigationParamsExport>("community");
    let [params] = useParams();
    let [days] = useDays();
    return (
        <div>
            <FormGroup>
                <label>Day to begin community mitigation</label>
                <NumberInput
                    range
                    min={0}
                    max={days}
                    step={1}
                    value={start}
                    onValue={(start) => updateParams({ start })}
                />
            </FormGroup>
            <FormGroup>
                <label>Duration of community mitigation</label>
                <NumberInput
                    range
                    min={0}
                    max={days}
                    value={duration}
                    onValue={(duration) => updateParams({ duration })}
                />
            </FormGroup>
            <FormGroup>
                <MiniExpandable
                    title="Community mitigation effectiveness"
                    initialState={true}
                >
                    <MatrixInput
                        value={effectiveness}
                        step={0.1}
                        min={0.0}
                        max={1.0}
                        symmetric={params.population_fraction_labels}
                        onChange={(newVal) => {
                            updateParams({ effectiveness: newVal });
                        }}
                    />
                </MiniExpandable>
            </FormGroup>
        </div>
    );
}
