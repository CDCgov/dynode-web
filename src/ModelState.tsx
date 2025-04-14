/* eslint-disable react-refresh/only-export-components */

import {
    MitigationParamsExport as MitigationParams,
    Parameters,
    SEIRModelUnified,
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
import { ModelRunTable, buildModelRunTable } from "./state/modelRuns";
import { Perf } from "./utils/Perf";

type ParamsContextType = {
    params: Parameters;
    setParams: React.Dispatch<React.SetStateAction<Parameters>>;
    replaceParams: (replace: (current: Parameters) => Parameters) => void;
    updateParams: (newParams: Partial<Parameters>) => void;
    days: number;
    setDays: React.Dispatch<React.SetStateAction<number>>;
    model: SEIRModelUnified | null;
    runningState: RunningState;
    modelRunTable: ModelRunTable | null;
    isTurbo: boolean;
    setIsTurbo: React.Dispatch<React.SetStateAction<boolean>>;
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
    let [isTurbo, setIsTurbo] = useState(false);

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
    let [modelRunTable, setModelRuns] = useState<ModelRunTable | null>(null);

    // Create a new model when the parameters change
    let model = useMemo(() => {
        return new SEIRModelUnified(params);
    }, [params]);

    // Run the model when the days or model changes
    useEffect(() => {
        if (!model) return;
        if (modelUpdateDebounceRef.current) {
            clearTimeout(modelUpdateDebounceRef.current);
        }
        setRunningState(RunningState.Running);
        modelUpdateDebounceRef.current = setTimeout(
            () => {
                console.debug("Running model");
                Perf.model.run.start();
                let result = buildModelRunTable(model.run(days));
                Perf.model.run.stop();
                setModelRuns(result);
                setRunningState(RunningState.Idle);
            },
            isTurbo ? 0 : 300
        );
    }, [model, days]);

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
                modelRunTable,
                runningState,
                isTurbo,
                setIsTurbo,
            }}
        >
            {children}
        </ParamsContext.Provider>
    );
};

export const useParamsContext = () => {
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
