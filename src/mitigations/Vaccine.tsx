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
                <label>Vaccine type</label>
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
                <label>Vaccination start</label>
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
                <label>Vaccine doses available</label>
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
                <label>Vaccine administration rate</label>
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
                <label>Vaccine effectiveness against infection</label>
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
                <label>Vaccine effectiveness against onward transmission</label>
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
                <label>Vaccine effectiveness against illness</label>
                <NumberInput
                    parameter="mitigations.vaccine.ve_p"
                    range
                    min={0}
                    max={100}
                    value={params.ve_p * 100}
                    onValue={(ve_p) => updateParams({ ve_p: ve_p / 100 })}
                />
            </FormGroup>
        </div>
    );
}
