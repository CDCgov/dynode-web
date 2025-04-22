import { FormGroup } from "../forms/FormGroup";
import { NumberInput } from "../forms/NumberInput";
import { useMitigation } from "../ModelState";
import { AntiviralsParams } from "@wasm/wasm_dynode";

export function AntiviralsEditor() {
    let [params, updateParams] = useMitigation<AntiviralsParams>("antivirals");
    return (
        <div>
            <FormGroup>
                <NumberInput
                    parameter="mitigations.antivirals.ave_i"
                    range
                    min={0}
                    max={1}
                    step={0.01}
                    value={params.ave_i}
                    numberType="pct"
                    onValue={(ave_i) => updateParams({ ave_i })}
                />
            </FormGroup>
            <FormGroup>
                <NumberInput
                    parameter="mitigations.antivirals.ave_p_hosp"
                    range
                    min={0}
                    max={1}
                    step={0.01}
                    numberType="pct"
                    value={params.ave_p_hosp}
                    onValue={(ave_p_hosp) => updateParams({ ave_p_hosp })}
                />
            </FormGroup>
            <FormGroup>
                <NumberInput
                    parameter="mitigations.antivirals.ave_p_death"
                    range
                    min={0}
                    max={1}
                    step={0.01}
                    numberType="pct"
                    value={params.ave_p_death}
                    onValue={(ave_p_death) => updateParams({ ave_p_death })}
                />
            </FormGroup>
            <FormGroup>
                <NumberInput
                    parameter="mitigations.antivirals.fraction_seek_care"
                    range
                    min={0}
                    max={1}
                    step={0.01}
                    numberType="pct"
                    value={params.fraction_seek_care}
                    onValue={(fraction_seek_care) =>
                        updateParams({ fraction_seek_care })
                    }
                />
            </FormGroup>
            <FormGroup>
                <NumberInput
                    parameter="mitigations.antivirals.fraction_diagnosed_prescribed_outpatient"
                    range
                    min={0}
                    max={1}
                    step={0.01}
                    numberType="pct"
                    value={params.fraction_diagnosed_prescribed_outpatient}
                    onValue={(fraction_diagnosed_prescribed_outpatient) =>
                        updateParams({
                            fraction_diagnosed_prescribed_outpatient,
                        })
                    }
                />
            </FormGroup>
            <FormGroup>
                <NumberInput
                    parameter="mitigations.antivirals.fraction_adhere"
                    range
                    min={0}
                    max={1}
                    step={0.01}
                    numberType="pct"
                    value={params.fraction_adhere}
                    onValue={(fraction_adhere) =>
                        updateParams({ fraction_adhere })
                    }
                />
            </FormGroup>
            <FormGroup>
                <NumberInput
                    parameter="mitigations.antivirals.fraction_diagnosed_prescribed_inpatient"
                    range
                    min={0}
                    max={1}
                    step={0.01}
                    numberType="pct"
                    value={params.fraction_diagnosed_prescribed_inpatient}
                    onValue={(fraction_diagnosed_prescribed_inpatient) =>
                        updateParams({
                            fraction_diagnosed_prescribed_inpatient,
                        })
                    }
                />
            </FormGroup>
        </div>
    );
}
