import { FormGroup } from "../forms/FormGroup";
import { NumberInput } from "../forms/NumberInput";
import { useMitigation  } from "../ModelState";
import { TTIQParams } from "@wasm/wasm_dynode";

export function TTIQEditor() {
    let [{
        p_id_infectious,
        p_infectious_isolates,
        isolation_reduction,
        p_contact_trace,
        p_traced_quarantines
     }, updateParams] =
        useMitigation<TTIQParams>("ttiq");
    return (
        <div>
            <FormGroup>
                <label>Probability an infectious person becomes aware of their own infection</label>
                <NumberInput
                    parameter="mitigations.ttiq.p_id_infectious"
                    range
                    min={0}
                    max={1.0}
                    step={0.01}
                    value={p_id_infectious}
                    onValue={(value) => updateParams({ p_id_infectious: value })}
                />
            </FormGroup>
            <FormGroup>
                <label>Probability an aware, infectious person will isolate</label>
                <NumberInput
                    parameter="mitigations.ttiq.p_infectious_isolates"
                    range
                    min={0}
                    max={1.0}
                    step={0.01}
                    value={p_infectious_isolates}
                    onValue={(value) => updateParams({ p_infectious_isolates: value })}
                />
            </FormGroup>
            <FormGroup>
                <label>Proportional reduction in infectious period due to isolation</label>
                <NumberInput
                    parameter="mitigations.ttiq.isolation_reduction"
                    range
                    min={0.0}
                    max={1.0}
                    step={0.01}
                    value={isolation_reduction}
                    onValue={(value) => updateParams({ isolation_reduction: value })}
                />
            </FormGroup>
            <FormGroup>
                <label>Probability contact tracing identifies an exposed person</label>
                <NumberInput
                    parameter="mitigations.ttiq.p_contact_trace"
                    range
                    min={0}
                    max={1.0}
                    step={0.01}
                    value={p_contact_trace}
                    onValue={(value) => updateParams({ p_contact_trace: value })}
                />
            </FormGroup>
            <FormGroup>
                <label>Probability a traced person fully quarantines</label>
                <NumberInput
                    parameter="mitigations.ttiq.p_traced_quarantines"
                    range
                    min={0}
                    max={1.0}
                    step={0.01}
                    value={p_traced_quarantines}
                    onValue={(value) => updateParams({ p_traced_quarantines: value })}
                />
            </FormGroup>
        </div>
    );
}
