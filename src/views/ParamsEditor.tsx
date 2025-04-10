import { NumberInput } from "../forms/NumberInput";
import { Mitigations } from "../mitigations/Mitigations";
import { FormGroup } from "../forms/FormGroup";
import { useDays, useParams } from "../ModelState";
import { GroupEditor } from "./GroupEditor";
import React from "react";
import { TABS } from "../App";

function EditorSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <h4 className="editor-section-header">{title}</h4>
            <section className="p-1 pb-0 mb-2">{children}</section>
        </div>
    );
}

export function ParamsEditor({
    activeTab,
}: {
    activeTab?: (typeof TABS)[number];
}) {
    const editors = [
        { editor: ScenarioParams, title: "Scenario" },
        { editor: Mitigations, title: "Mitigations" },
    ];
    const detectionEditor = {
        editor: DetectionParamsEditor,
        title: "Detection",
    };
    if (activeTab?.title === "Detection") {
        editors.unshift(detectionEditor);
    } else {
        editors.push(detectionEditor);
    }

    return (
        <div>
            {editors.map(({ editor: Editor, title }) => (
                <EditorSection key={title} title={title}>
                    <Editor />
                </EditorSection>
            ))}
        </div>
    );
}

function ScenarioParams() {
    let [days, setDays] = useDays();
    let [params, updateParams] = useParams();

    return (
        <>
            <FormGroup>
                <label>Days</label>
                <NumberInput
                    range
                    min={1}
                    max={400}
                    step={10}
                    value={days}
                    numberType="int"
                    onValue={(d) => setDays(d)}
                />
            </FormGroup>
            <FormGroup>
                <label>Population size</label>
                <NumberInput
                    min={0}
                    value={params.population}
                    step={1_000_000}
                    numberType="int"
                    onValue={(population) => updateParams({ population })}
                />
            </FormGroup>

            <FormGroup>
                <label>Initial infections</label>
                <NumberInput
                    min={0}
                    step={100}
                    value={params.initial_infections}
                    onValue={(initial_infections) =>
                        updateParams({ initial_infections })
                    }
                />
            </FormGroup>
            <FormGroup>
                <label>R0</label>
                <NumberInput
                    range
                    min={0.8}
                    max={2.2}
                    step={0.1}
                    value={params.r0}
                    numberType="float"
                    onValue={(r0) => updateParams({ r0 })}
                />
            </FormGroup>
            <FormGroup>
                <label>Latent period</label>
                <NumberInput
                    range
                    min={0.5}
                    max={2.5}
                    step={0.1}
                    value={params.latent_period}
                    numberType="float"
                    onValue={(latent_period) => updateParams({ latent_period })}
                />
            </FormGroup>
            <FormGroup>
                <label>Infectious period</label>
                <NumberInput
                    range
                    min={1}
                    max={4.5}
                    step={0.1}
                    value={params.infectious_period}
                    numberType="float"
                    onValue={(infectious_period) =>
                        updateParams({ infectious_period })
                    }
                />
            </FormGroup>

            <FormGroup>
                <GroupEditor
                    label="Percent symptomatic"
                    value={params.fraction_symptomatic}
                    onValue={(newValue) =>
                        updateParams({ fraction_symptomatic: newValue })
                    }
                    renderInput={(value, onValue) => (
                        <NumberInput
                            range
                            min={0.3}
                            max={0.8}
                            step={0.01}
                            value={value}
                            numberType="float"
                            onValue={onValue}
                        />
                    )}
                />
            </FormGroup>
            <FormGroup>
                <GroupEditor
                    label="Percent hospitalized"
                    value={params.fraction_hospitalized}
                    onValue={(newValue) =>
                        updateParams({ fraction_hospitalized: newValue })
                    }
                    renderInput={(value, onValue) => (
                        <NumberInput
                            min={0.0}
                            max={0.1}
                            step={0.01}
                            value={value}
                            numberType="float"
                            onValue={onValue}
                        />
                    )}
                />
            </FormGroup>
            <FormGroup>
                <GroupEditor
                    label="Fatality rate"
                    value={params.fraction_dead}
                    onValue={(newValue) =>
                        updateParams({ fraction_dead: newValue })
                    }
                    renderInput={(value, onValue) => (
                        <NumberInput
                            min={0.0}
                            max={0.2}
                            step={0.005}
                            value={value}
                            numberType="float"
                            onValue={onValue}
                        />
                    )}
                />
            </FormGroup>
        </>
    );
}

function DetectionParamsEditor() {
    let [params, updateParams] = useParams();
    return (
        <>
            <FormGroup>
                <label>Proportion of new symptomatic infections tested</label>
                <NumberInput
                    range
                    min={0}
                    max={1.0}
                    step={0.01}
                    value={params.p_test_sympto}
                    numberType="float"
                    onValue={(value) => updateParams({ p_test_sympto: value })}
                />
            </FormGroup>
            <FormGroup>
                <label>Test sensitivity</label>
                <NumberInput
                    range
                    min={0}
                    max={1.0}
                    step={0.01}
                    value={params.test_sensitivity}
                    numberType="float"
                    onValue={(value) =>
                        updateParams({ test_sensitivity: value })
                    }
                />
            </FormGroup>
            <FormGroup>
                <label>
                    Probability a positive test is forwarded to public health
                </label>
                <NumberInput
                    range
                    min={0}
                    max={1.0}
                    step={0.01}
                    value={params.p_test_forward}
                    numberType="float"
                    onValue={(value) => updateParams({ p_test_forward: value })}
                />
            </FormGroup>
        </>
    );
}
