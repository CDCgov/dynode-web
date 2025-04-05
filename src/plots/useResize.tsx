import { useLayoutEffect, useState } from "react";

export function useResize(ref: React.RefObject<HTMLElement | null>) {
    const [widthHeight, setWidthHeight] = useState<[number, number] | null>(
        null
    );

    useLayoutEffect(() => {
        if (!ref.current) return;

        let timeoutId: ReturnType<typeof setTimeout> | null = null;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                if (entry.contentRect.width) {
                    // Debounce resize
                    if (timeoutId) clearTimeout(timeoutId);
                    timeoutId = setTimeout(() => {
                        // Only update if the size has changed
                        setWidthHeight((prev) => {
                            let width = entry.contentRect.width;
                            let height = entry.contentRect.height;
                            if (
                                prev &&
                                prev[0] === width &&
                                prev[1] === height
                            ) {
                                return prev;
                            }
                            return [width, height];
                        });
                    }, 100);
                }
            }
        });

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [ref]);

    return widthHeight;
}
