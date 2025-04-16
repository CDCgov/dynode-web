import { FormGroup } from "../forms/FormGroup";
import { SelectInput } from "../forms/SelectInput";
import { NumberInput } from "../forms/NumberInput";
import { useDays, useMitigation, useParams } from "../ModelState";
import { VaccineParams } from "@wasm/wasm_dynode";

export function VaccineEditor() {
    let [modelParams] = useParams();
    let [params, updateParams] = useMitigation<VaccineParams>("vaccine");
    let [days] = useDays();
    let dosesOptions = [
        { value: 1, label: "One dose" },
        { value: 2, label: "Two doses" },
    ];
    return (
        <div>
            <FormGroup>
                <SelectInput
                    parameter="mitigations.vaccine.doses"
                    value={dosesOptions.find((o) => o.value === params.doses)}
                    options={dosesOptions}
                    onChange={(option: unknown) => {
                        let doses = (
                            option as { value: number; label: string } | null
                        )?.value;
                        if (doses) {
                            updateParams({ doses });
                        }
                    }}
                />
            </FormGroup>
            <FormGroup>
                <NumberInput
                    parameter="mitigations.vaccine.start"
                    range
                    min={0}
                    max={days}
                    value={params.start}
                    onValue={(start) => updateParams({ start })}
                />
            </FormGroup>
            <FormGroup>
                <NumberInput
                    parameter="mitigations.vaccine.doses_available"
                    range
                    min={0}
                    step={1_000_000}
                    max={modelParams.population}
                    value={params.doses_available}
                    onValue={(doses_available) =>
                        updateParams({ doses_available })
                    }
                />
            </FormGroup>
            <FormGroup>
                <NumberInput
                    parameter="mitigations.vaccine.administration_rate"
                    range
                    min={0}
                    max={30_000_000}
                    step={1_000_000}
                    value={params.administration_rate}
                    onValue={(administration_rate) =>
                        updateParams({ administration_rate })
                    }
                />
            </FormGroup>
            <FormGroup>
                <NumberInput
                    parameter="mitigations.vaccine.ve_s"
                    range
                    min={0}
                    max={100}
                    value={params.ve_s * 100}
                    onValue={(ve_s) => updateParams({ ve_s: ve_s / 100 })}
                />
            </FormGroup>
            <FormGroup>
                <NumberInput
                    parameter="mitigations.vaccine.ve_i"
                    range
                    min={0}
                    max={100}
                    value={params.ve_i * 100}
                    onValue={(ve_i) => updateParams({ ve_i: ve_i / 100 })}
                />
            </FormGroup>
            <FormGroup>
                <NumberInput
                    parameter="mitigations.vaccine.ve_p"
                    range
                    min={0}
                    max={100}
                    value={params.ve_p * 100}
                    onValue={(ve_p) => updateParams({ ve_p: ve_p / 100 })}
                />
            </FormGroup>
            <FormGroup>
                <label>Delay to second dose campaign</label>
                <NumberInput
                    range
                    min={0}
                    max={days}
                    value={params.start2_delay}
                    onValue={(start2_delay) => updateParams({ start2_delay })}
                />
            </FormGroup>
            <FormGroup>
                <label>Fraction of all doses that are second doses</label>
                <NumberInput
                    range
                    min={0}
                    max={100}
                    value={params.fraction_2 * 100}
                    onValue={(fraction_2) =>
                        updateParams({ fraction_2: fraction_2 / 100 })
                    }
                />
            </FormGroup>
            <FormGroup>
                <label>Second dose: Effectiveness against infection</label>
                <NumberInput
                    range
                    min={0}
                    max={100}
                    value={params.ve_2s * 100}
                    onValue={(ve_2s) => updateParams({ ve_2s: ve_2s / 100 })}
                />
            </FormGroup>
            <FormGroup>
                <label>Second dose: Effectiveness against onward transmission</label>
                <NumberInput
                    range
                    min={0}
                    max={100}
                    value={params.ve_2i * 100}
                    onValue={(ve_2i) => updateParams({ ve_2i: ve_2i / 100 })}
                />
            </FormGroup>
            <FormGroup>
                <label>Second dose: Effectiveness against illness</label>
                <NumberInput
                    range
                    min={0}
                    max={100}
                    value={params.ve_2p * 100}
                    onValue={(ve_2p) => updateParams({ ve_2p: ve_2p / 100 })}
                />
            </FormGroup>
        </div>
    );
}
