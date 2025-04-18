import { NumberInput } from "./NumberInput";

export type MatrixInputProps = {
    /** Must be in column-major form */
    value: number[];
    /** Handler for the new matrix values */
    onChange: (value: number[]) => void;
    /** The number of columns in the matrix */
    cols?: string[];
    /** The number of rows in the matrix */
    rows?: string[];
    /** Renders each combo of col/rows once */
    symmetric?: string[];
    /** Step for the matrix inputs */
    step?: number;
    /** Min for the matrix inputs */
    min?: number;
    /** Max for the matrix inputs */
    max?: number;
};

export function MatrixInput({
    value,
    onChange,
    cols,
    rows,
    symmetric,
    step,
    min,
    max,
}: MatrixInputProps) {
    const isSymmetric = symmetric !== undefined;

    // Check symmetric v.s. cols/rows
    if (isSymmetric && (cols || rows)) {
        throw new Error(
            "Cannot set both symmetric and cols/rows props at the same time.",
        );
    } else if (isSymmetric) {
        cols = symmetric;
        rows = symmetric;
    } else if (!cols || !rows) {
        throw new Error("Must provide either cols and rows or symmetric prop.");
    }

    let m = new FlatMatrix(value, cols.length, rows.length, isSymmetric);

    const handleChange = (i: number, j: number) => (newValue: number) => {
        if (isNaN(newValue)) {
            return;
        }
        onChange(m.newValue(i, j, newValue));
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {cols.map((col, j) => (
                            <th key={j}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i}>
                            <td>{row}</td>
                            {cols.map((_, j) => {
                                if (isSymmetric && j < i) {
                                    return <td key={j}></td>;
                                }
                                return (
                                    <td key={j}>
                                        <NumberInput
                                            min={min}
                                            max={max}
                                            numberType="float"
                                            value={value[m.index(i, j)]}
                                            onValue={handleChange(i, j)}
                                            showSaveButton={false}
                                            step={step}
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

class FlatMatrix {
    flatColMajor: number[];
    cols: number;
    rows: number;
    isSymmetric: boolean;
    constructor(
        flatColMajor: number[],
        cols: number,
        rows: number,
        isSymmetric: boolean,
    ) {
        // Length should be equal to rows * cols
        if (flatColMajor.length !== rows * cols) {
            throw new Error(
                `Value length ${flatColMajor.length} does not match matrix size ${rows}x${cols}`,
            );
        }

        this.flatColMajor = flatColMajor;
        this.cols = cols;
        this.rows = rows;
        this.isSymmetric = isSymmetric;
    }
    index(i: number, j: number) {
        return i * this.cols + j;
    }
    newValue(i: number, j: number, newValue: number) {
        const newValues = [...this.flatColMajor];
        newValues[this.index(i, j)] = newValue;
        if (this.isSymmetric && i !== j) {
            newValues[this.index(j, i)] = newValue;
        }
        return newValues;
    }
}

if (import.meta.vitest) {
    const { test, describe, expect } = import.meta.vitest;
    describe("FlatMatrix", () => {
        test("length check", () => {
            expect(() => new FlatMatrix([1, 2, 3], 2, 2, false)).toThrow(
                "Value length 3 does not match matrix size 2x2",
            );
        });
        test("index", () => {
            const matrix = new FlatMatrix([1, 2, 3, 4], 2, 2, false);
            expect(matrix.index(0, 0)).toBe(0);
            expect(matrix.index(0, 1)).toBe(1);
            expect(matrix.index(1, 0)).toBe(2);
            expect(matrix.index(1, 1)).toBe(3);
        });

        test("newValue", () => {
            const matrix = new FlatMatrix([1, 2, 3, 4], 2, 2, true);
            let updated = matrix.newValue(0, 1, 5);
            expect(updated).toEqual([1, 5, 5, 4]);
            // Should make a copy, not modify the original
            expect(updated).not.toEqual(matrix.flatColMajor);
        });
    });
}
