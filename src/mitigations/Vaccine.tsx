import { FormGroup } from "../forms/FormGroup";
import { SelectInput } from "../forms/SelectInput";
import { NumberInput } from "../forms/NumberInput";
import { useDays, useMitigation, useParams } from "../ModelState";
import { VaccineParams } from "@wasm/wasm_dynode";
import { useMemo } from "react";

export function VaccineEditor() {
    let [modelParams] = useParams();
    let [params, updateParams] = useMitigation<VaccineParams>("vaccine");
    let [days] = useDays();
    let dosesOptions = [
        { value: 1, label: "One dose" },
        { value: 2, label: "Two doses" },
    ];

    const [multi_ves, multi_vei, multi_vep]: [number, number][] =
        useMemo(() => {
            return [
                [params.ve_s, params.ve_2s],
                [params.ve_i, params.ve_2i],
                [params.ve_p, params.ve_2p],
            ];
        }, [
            params.ve_s,
            params.ve_2s,
            params.ve_i,
            params.ve_2i,
            params.ve_p,
            params.ve_2p,
        ]);
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
            {params.doses === 2 && (
                <>
                    <FormGroup>
                        <NumberInput
                            parameter="mitigations.vaccine.ramp_up"
                            range
                            min={0}
                            max={30}
                            value={params.ramp_up}
                            onValue={(ramp_up) => updateParams({ ramp_up })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <NumberInput
                            parameter="mitigations.vaccine.dose2_delay"
                            range
                            min={0}
                            max={days}
                            value={params.dose2_delay}
                            onValue={(dose2_delay) =>
                                updateParams({ dose2_delay })
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <NumberInput
                            parameter="mitigations.vaccine.p_get_2_doses"
                            range
                            min={0}
                            step={0.01}
                            max={1}
                            value={params.p_get_2_doses}
                            numberType="pct"
                            onValue={(p_get_2_doses) =>
                                updateParams({
                                    p_get_2_doses: p_get_2_doses,
                                })
                            }
                        />
                    </FormGroup>
                </>
            )}
            {(
                [
                    ["ve_s", "ve_2s", multi_ves],
                    ["ve_i", "ve_2i", multi_vei],
                    ["ve_p", "ve_2p", multi_vep],
                ] as const
            ).map(([ve, ve_2, multi]) => (
                <FormGroup>
                    {params.doses === 2 ? (
                        <NumberInput
                            numberType="pct"
                            parameter={`mitigations.vaccine.${ve}`}
                            range
                            isMulti
                            min={0}
                            max={1}
                            step={0.01}
                            value={multi}
                            onValue={([d1, d2]: [number, number]) => {
                                updateParams({
                                    [ve]: d1,
                                    [ve_2]: d2,
                                });
                            }}
                        />
                    ) : (
                        <NumberInput
                            numberType="pct"
                            parameter={`mitigations.vaccine.${ve}`}
                            range
                            min={0}
                            max={1}
                            step={0.01}
                            value={params[ve]}
                            onValue={(value) => updateParams({ [ve]: value })}
                        />
                    )}
                </FormGroup>
            ))}
        </div>
    );
}
