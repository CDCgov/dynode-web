import { FormGroup } from "../forms/FormGroup";
import { NumberInput } from "../forms/NumberInput";
import { useMitigation } from "../ModelState";
import { AntiviralsParams } from "@wasm/wasm_dynode";

export function AntiviralsEditor() {
    let [params, updateParams] = useMitigation<AntiviralsParams>("antivirals");
    return (
        <div>
            <FormGroup>
                <label>Antiviral Efficacy: AVEi</label>
                <div className="input-details">
                    Prevention of transmission from treated infected
                </div>
                <NumberInput
                    range
                    min={0}
                    max={1}
                    step={0.01}
                    value={params.ave_i}
                    onValue={(ave_i) => updateParams({ ave_i })}
                />
            </FormGroup>
            <FormGroup>
                <label>Antiviral Efficacy: AVEp</label>
                <div className="input-details">
                    Prevention of hospitalization/death
                </div>
                <NumberInput
                    range
                    min={0}
                    max={1}
                    step={0.01}
                    value={params.ave_p}
                    onValue={(ave_p) => updateParams({ ave_p })}
                />
            </FormGroup>
            <FormGroup>
                <label>Fraction of cases that seek care</label>
                <NumberInput
                    range
                    min={0}
                    max={1}
                    step={0.01}
                    value={params.fraction_seek_care}
                    onValue={(fraction_seek_care) =>
                        updateParams({ fraction_seek_care })
                    }
                />
            </FormGroup>
            <FormGroup>
                <label>
                    Fraction of diagnosed care-seeking outpatient cases
                </label>
                <NumberInput
                    range
                    min={0}
                    max={1}
                    step={0.01}
                    value={params.fraction_diagnosed_prescribed_outpatient}
                    onValue={(fraction_diagnosed_prescribed_outpatient) =>
                        updateParams({
                            fraction_diagnosed_prescribed_outpatient,
                        })
                    }
                />
            </FormGroup>
            <FormGroup>
                <label>
                    Fraction of individuals that adhere to prescribed antiviral
                    regimen
                </label>
                <NumberInput
                    range
                    min={0}
                    max={1}
                    step={0.01}
                    value={params.fraction_adhere}
                    onValue={(fraction_adhere) =>
                        updateParams({ fraction_adhere })
                    }
                />
            </FormGroup>
            <FormGroup>
                <label>
                    Fraction of hospitalized cases that are diagnosed and
                    prescribed antivirals
                </label>
                <NumberInput
                    range
                    min={0}
                    max={1}
                    step={0.01}
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
