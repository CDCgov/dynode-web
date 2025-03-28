/* eslint-disable react-refresh/only-export-components */

import {
    MitigationParams,
    Parameters,
    SEIRModelUnified,
    ModelRuns,
    ModelRunType,
    OutputType,
    OutputItem,
} from "@wasm/wasm_dynode";
import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useRef,
    useEffect,
    useMemo,
} from "react";
import { Point } from "./plots/SEIRPlot";

export type LabeledModelRun = [ModelRunType, Point[]];
type OutputPoints = Record<
    OutputType,
    { byGroup: LabeledModelRun[][]; byModelRun: LabeledModelRun[] }
>;

type ParamsContextType = {
    params: Parameters;
    setParams: React.Dispatch<React.SetStateAction<Parameters>>;
    replaceParams: (replace: (current: Parameters) => Parameters) => void;
    updateParams: (newParams: Partial<Parameters>) => void;
    days: number;
    setDays: React.Dispatch<React.SetStateAction<number>>;
    model: SEIRModelUnified | null;
    runningState: RunningState;
    modelResult: ModelRuns | null;
    points: OutputPoints | null;
};

const ParamsContext = createContext<ParamsContextType | undefined>(undefined);

export enum RunningState {
    Idle,
    Running,
}
export const ParamsProvider = ({
    initialParams,
    children,
}: {
    initialParams: Parameters;
    children: ReactNode;
}) => {
    const [params, setParams] = useState<Parameters>(initialParams);
    let [runningState, setRunningState] = useState<RunningState>(
        RunningState.Idle
    );

    const updateParams = (newParams: Partial<Parameters>) =>
        setParams((current) => ({
            ...current,
            ...newParams,
        }));
    // Only allow setting params through a function that takes the current params
    // to avoid forgetting to use the current state instead of other references
    // to params
    const replaceParams = (replace: (current: Parameters) => Parameters) =>
        setParams((current) => {
            replace(current);
            return replace(current);
        });

    const modelUpdateDebounceRef = useRef<NodeJS.Timeout | null>(null);
    // let [activePreset, activePreset] = useState(Preset | null>(null);
    let [days, setDays] = useState(200);
    let [model, setModel] = useState<SEIRModelUnified | null>(null);
    let [modelResult, setModelResult] = useState<ModelRuns | null>(null);

    // Create a new model when the parameters change
    useEffect(() => {
        let model = new SEIRModelUnified(params);
        setModel(model);
        console.debug("Updating model with new params", params);
    }, [params]);

    // Run the model when the days or model changes
    useEffect(() => {
        if (!model) return;
        if (modelUpdateDebounceRef.current) {
            clearTimeout(modelUpdateDebounceRef.current);
        }
        setRunningState(RunningState.Running);
        modelUpdateDebounceRef.current = setTimeout(() => {
            console.debug("Running model");
            setModelResult(model.run(days));
            setRunningState(RunningState.Idle);
        }, 300);
    }, [model, days]);

    let points: OutputPoints | null = useMemo(() => {
        if (!modelResult) return null;

        let points: OutputPoints = {
            infection_incidence: { byGroup: [], byModelRun: [] },
            hospital_incidence: { byGroup: [], byModelRun: [] },
        };

        modelResult.types.forEach((modelRunType, runIndex) => {
            let run = modelResult.runs[modelRunType];
            (Object.entries(run) as [OutputType, OutputItem[]][]).forEach(
                ([outputType, output]) => {
                    points[outputType].byModelRun.push([
                        modelRunType,
                        output.map((item) => {
                            return {
                                x: item.time,
                                y: item.grouped_values.reduce(
                                    (acc, value, groupIndex) => {
                                        // Also push to byGroup
                                        let byGroup =
                                            points[outputType].byGroup;
                                        if (!byGroup[groupIndex]) {
                                            byGroup[groupIndex] = [];
                                        }
                                        if (!byGroup[groupIndex][runIndex]) {
                                            byGroup[groupIndex][runIndex] = [
                                                modelRunType,
                                                [],
                                            ];
                                        }
                                        byGroup[groupIndex][runIndex][1].push({
                                            x: item.time,
                                            y: value,
                                            category: modelRunType,
                                        });
                                        return acc + value;
                                    },
                                    0
                                ),
                                category: modelRunType,
                            };
                        }),
                    ]);
                }
            );
        });

        return points;
    }, [modelResult]);

    return (
        <ParamsContext.Provider
            value={{
                params,
                updateParams,
                replaceParams,
                setParams,
                days,
                setDays,
                model,
                modelResult,
                points,
                runningState,
            }}
        >
            {children}
        </ParamsContext.Provider>
    );
};

const useParamsContext = () => {
    const context = useContext(ParamsContext);
    if (!context) {
        throw new Error("useParams must be used within a ParamsProvider");
    }
    return context;
};

export const useParams = () => {
    const { params, updateParams, replaceParams, setParams } =
        useParamsContext();
    return [params, updateParams, replaceParams, setParams] as const;
};

export const useDays = () => {
    const { days, setDays } = useParamsContext();
    return [days, setDays] as const;
};

export const useModelResult = () => {
    const { runningState, modelResult, points } = useParamsContext();
    const isRunning = runningState === RunningState.Running;
    return { runningState, isRunning, points, modelResult };
};

export type MitigationType = keyof MitigationParams;

export const useMitigation = <T,>(m: MitigationType) => {
    const [params, , replaceParams] = useParams();
    return [
        params.mitigations[m] as T,
        (newMitigation: Partial<T>) => {
            replaceParams((current: Parameters) => ({
                ...current,
                mitigations: {
                    ...current.mitigations,
                    [m]: { ...current.mitigations[m], ...newMitigation },
                },
            }));
        },
    ] as const;
};
