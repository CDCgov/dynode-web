import { HKT, MappedFlatObject } from "../utils";

interface EditorConfigItem<T> {
    tooltip?: string;
    defaultValue?: T;
}

// This is needed because EditorConfig takes a generic
interface EditorConfigHKT extends HKT {
    result: EditorConfigItem<this["param"]>;
}

type EditorConfig<T> = MappedFlatObject<T, EditorConfigHKT>;

class EditorConfigHelper<T> {
    config: Partial<EditorConfig<T>>;
    constructor(config: Partial<EditorConfig<T>>) {
        this.config = config;
    }
    getConfig(path: keyof EditorConfig<T>) {
        return this.config[path];
    }
}

export function defineEditorConfig<T>(config: Partial<EditorConfig<T>>) {
    return new EditorConfigHelper(config);
}
