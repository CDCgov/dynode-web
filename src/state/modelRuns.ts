import {
    MitigationType,
    ModelOutputExport,
    OutputType,
} from "@wasm/wasm_dynode";
import { entries } from "../utils";
import { useParamsContext } from "../ModelState";
import { useMemo } from "react";
import { table } from "arquero";

export type ModelRunTable = {
    rows: {
        day: number[];
        value: number[];
        group: number[];
        output_type: OutputType[];
        mitigation_type: MitigationType[];
    };
    mitigation_types: MitigationType[];
    output_types: OutputType[];
};

export type Point = {
    x: number;
    y: number;
    mitigation_type?: string;
    output_type?: string;
    group?: number;
};

export function buildModelRunTable(exported: ModelOutputExport): ModelRunTable {
    let table: ModelRunTable = {
        rows: {
            day: [],
            value: [],
            group: [],
            output_type: [],
            mitigation_type: [],
        },
        mitigation_types: exported.mitigation_types,
        output_types: exported.output_types,
    };
    entries(exported.output).forEach(([mitigation_type, output]) => {
        entries(output).forEach(([output_type, items]) => {
            items.forEach((item) => {
                item.grouped_values.forEach((val, i) => {
                    table.rows.day.push(item.time);
                    table.rows.value.push(val);
                    table.rows.group.push(i);
                    table.rows.output_type.push(output_type);
                    table.rows.mitigation_type.push(mitigation_type);
                });
            });
        });
    });
    return table;
}

export function useModelRunData() {
    const { modelRunTable } = useParamsContext();
    let dt = useMemo(() => {
        if (!modelRunTable) return null;
        return table(modelRunTable.rows);
    }, [modelRunTable]);
    return {
        dt,
        mitigation_types: modelRunTable?.mitigation_types || null,
        output_types: modelRunTable?.output_types || null,
    };
}
