import "./Mitigations.css";
import { VaccineEditor } from "./Vaccine";
import { CommunityEditor } from "./Community";
import { AntiviralsEditor } from "./Antivirals";
import { useParams } from "../ModelState";
import { MitigationType } from "../ModelState";
import { CheckIcon, PlusIcon } from "@heroicons/react/20/solid";
import { TTIQEditor } from "./TTIQ";

let mitigationComponents: Record<MitigationType, React.FC> = {
    vaccine: VaccineEditor,
    antivirals: AntiviralsEditor,
    community: CommunityEditor,
    ttiq: TTIQEditor,
};

function MitigationOptionsContainer({
    name,
    enabled,
    onToggle,
    children,
}: {
    name: MitigationType;
    enabled: boolean;
    onToggle: (enabled: boolean) => void;
    children: React.ReactNode;
}) {
    return (
        <div className={"mitigation mb-2" + (enabled ? "" : " collapsed")}>
            <div
                className="mitigation-header"
                onClick={() => onToggle(!enabled)}
            >
                <h4>{name}</h4>
                {enabled ? (
                    <CheckIcon className="status-icon" />
                ) : (
                    <PlusIcon className="status-icon" />
                )}
            </div>
            <div
                className="mitigation-body"
                style={{ display: enabled ? "" : "none" }}
            >
                {children}
            </div>
        </div>
    );
}

export function Mitigations() {
    let [params, updateParams] = useParams();
    const toggleMitigation = (name: MitigationType, enabled: boolean) => {
        updateParams({
            mitigations: {
                ...params.mitigations,
                [name]: { ...params.mitigations[name], enabled },
            },
        });
    };
    return (
        <div>
            {Object.entries(mitigationComponents).map(([name, Component]) => {
                const { enabled, editable } =
                    params.mitigations[name as MitigationType];
                return (
                    editable && (
                        <MitigationOptionsContainer
                            name={name as MitigationType}
                            enabled={enabled}
                            onToggle={(enabled) =>
                                toggleMitigation(
                                    name as MitigationType,
                                    enabled
                                )
                            }
                            key={name}
                        >
                            <Component />
                        </MitigationOptionsContainer>
                    )
                );
            })}
        </div>
    );
}
