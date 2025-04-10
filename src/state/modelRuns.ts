import {
    MitigationType,
    ModelOutputExport,
    OutputType,
} from "@wasm/wasm_dynode";
import { entries } from "../utils";
import { useParamsContext } from "../ModelState";
import { useMemo } from "react";
import { ColumnTable, table } from "arquero";
import { BasePoint } from "../plots/plotUtils";

export type ModelRunTable = {
    rows: Rows<Point>;
    mitigation_types: MitigationType[];
    output_types: OutputType[];
    p_detect: Map<MitigationType, BasePoint[]>;
};

export type Point = {
    x: number;
    y: number;
    mitigation_type: MitigationType;
    output_type: OutputType;
    age_group: number;
};

export type Rows<P extends BasePoint> = {
    [K in keyof P]: Array<P[K]>;
};

export class DataTable<P extends BasePoint> {
    private _table: ColumnTable;
    constructor(rows: Rows<P>) {
        this._table = table(rows);
    }
    get table() {
        return this._table;
    }
}

export function buildModelRunTable(exported: ModelOutputExport): ModelRunTable {
    let table: ModelRunTable = {
        rows: {
            x: [],
            y: [],
            age_group: [],
            output_type: [],
            mitigation_type: [],
        },
        mitigation_types: exported.mitigation_types,
        output_types: exported.output_types,
        p_detect: new Map<MitigationType, BasePoint[]>(),
    };
    entries(exported.p_detect)
        .sort()
        .forEach(([mitigation_type, items]) => {
            table.p_detect.set(
                mitigation_type,
                items.map((item) => ({
                    x: item.time,
                    y: item.value,
                }))
            );
        });

    entries(exported.output)
        .sort()
        .forEach(([mitigation_type, output]) => {
            entries(output)
                .sort()
                .forEach(([output_type, items]) => {
                    items.forEach((item) => {
                        item.grouped_values.forEach((val, i) => {
                            table.rows.x.push(item.time);
                            table.rows.y.push(val);
                            table.rows.age_group.push(i);
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
        return new DataTable<Point>(modelRunTable.rows);
    }, [modelRunTable]);
    return {
        dt,
        mitigation_types: modelRunTable?.mitigation_types || null,
        output_types: modelRunTable?.output_types || null,
        p_detect: modelRunTable?.p_detect || null,
    };
}
