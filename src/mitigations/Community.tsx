import { FormGroup } from "../forms/FormGroup";
import { NumberInput } from "../forms/NumberInput";
import { useMitigation } from "../ModelState";
import { CommunityMitigationParamsExport } from "@wasm/wasm_dynode";

export function CommunityEditor() {
    let [params, updateParams] =
        useMitigation<CommunityMitigationParamsExport>("community");
    return (
        <div>
            <FormGroup>
                <label>Day to begin community mitigation</label>
                <NumberInput
                    value={params.start}
                    onValue={(start) => updateParams({ start })}
                />
            </FormGroup>
            <FormGroup>
                <label>Duration of community mitigation</label>
                <NumberInput
                    value={params.duration}
                    onValue={(duration) => updateParams({ duration })}
                />
            </FormGroup>
        </div>
    );
}
