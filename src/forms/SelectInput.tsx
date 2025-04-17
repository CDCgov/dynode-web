import { useEffect, useId, useState } from "react";
import Select, { Props as OriginalSelectProps, components } from "react-select";
import {
    ParameterEditorConfig,
    ParameterPath,
} from "../config/parameters.config";
import { Label } from "./Label";

interface SelectInputProps<T> extends OriginalSelectProps {
    valueMap?: Record<string, T> | null;
    colorTheme?: "light" | "dark";
    parameter?: ParameterPath;
}

export function SelectInput<T>({
    valueMap,
    colorTheme = "dark",
    parameter,
    ...props
}: SelectInputProps<T>) {
    // If you don't wait until the component is attached to the dom
    // (mounted), you will get a console error: Warning: Prop `id` did not match
    // Only rendering after mount ensures that Selects aren't rendered server-side.
    // https://github.com/JedWatson/react-select/issues/5459
    const id = useId();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    if (props.value && valueMap) {
        throw new Error("Don't use both valueMap and value");
    }

    let tooltip =
        parameter && ParameterEditorConfig.getConfig(parameter)?.tooltip;

    // const value = props.value ? valueMap?.[props.value as string] : null;

    const colors =
        colorTheme === "dark"
            ? {
                  /*
                   * multiValue(remove)/color:hover
                   */
                  danger: "var(--red)", // light purple

                  /*
                   * multiValue(remove)/backgroundColor(focused)
                   * multiValue(remove)/backgroundColor:hover
                   */
                  dangerLight: "var(--lighter-black)", // Lighter Red

                  /*
                   * control/backgroundColor
                   * menu/backgroundColor
                   * option/color(selected)
                   */
                  neutral0: "var(--input-bg)",

                  /*
                   * control/backgroundColor(disabled)
                   */
                  neutral5: "#44475a", // Current Line (Dracula)

                  /*
                   * control/borderColor(disabled)
                   * multiValue/backgroundColor
                   * indicators(separator)/backgroundColor(disabled)
                   */
                  neutral10: "rgb(38, 39, 52)", // Slightly lighter bg

                  /*
                   * control/borderColor
                   * option/color(disabled)
                   * indicators/color
                   * indicators(separator)/backgroundColor
                   * indicators(loading)/color
                   */
                  neutral20: "rgba(0, 0, 0, 0.4)", // Comment Color (Dracula)

                  /*
                   * control/borderColor(focused)
                   * control/borderColor:hover
                   */
                  neutral30: "var(--purple)",

                  /*
                   * menu(notice)/color
                   * singleValue/color(disabled)
                   * indicators/color:hover
                   */
                  neutral40: "#ffb86c", // Orange (Dracula)

                  /*
                   * placeholder/color
                   */
                  neutral50: "#f8f8f2", // Foreground (Dracula)

                  /*
                   * indicators/color(focused)
                   * indicators(loading)/color(focused)
                   */
                  neutral60: "var(--purple)",

                  neutral70: "var(--purple)",

                  /*
                   * input/color
                   * multiValue(label)/color
                   * singleValue/color
                   * indicators/color(focused)
                   * indicators/color:hover(focused)
                   */
                  neutral80: "#FFF",

                  neutral90: "#FFF",

                  /*
                   * control/boxShadow(focused)
                   * control/borderColor(focused)
                   * control/borderColor:hover(focused)
                   * option/backgroundColor(selected)
                   * option/backgroundColor:active(selected)
                   */
                  primary: "var(--purple)",
                  /*
                   * option/backgroundColor(focused)
                   */
                  primary25: "var(--purple)",

                  /*
                   * option/backgroundColor:active
                   */
                  primary50: "var(--purple)",

                  primary75: "#ff79c6", // Pink (Dracula)
              }
            : null;

    return (
        isMounted && (
            <>
                <Label parameter={parameter} />
                <span title={tooltip}>
                    <Select
                        instanceId={id}
                        {...props}
                        value={props.value}
                        components={components}
                        theme={(theme) => ({
                            ...theme,
                            colors: colors
                                ? {
                                      ...colors,
                                  }
                                : theme.colors,
                        })}
                    />
                </span>
            </>
        )
    );
}

export const SelectComponents = components;
