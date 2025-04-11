import { JSX, useEffect, useState } from "react";
import "./Tabs.css";

interface TabData {
    title: string;
    isDark?: boolean;
    mobileOnly?: boolean;
    devOnly?: boolean;
    content: () => JSX.Element;
}
export function Tabs({
    tabs,
    active,
    setActive,
}: {
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
    tabs: TabData[];
}) {
    const [tabContent, setTabContent] = useState(Array<JSX.Element>);

    // TODO<ryl8@cdc.gov> handle tabs props changing
    useEffect(() => {
        if (!tabContent[active]) {
            console.debug("Rendering tab " + active);
            let newTabContent = [...tabContent];
            newTabContent[active] = tabs[active].content();
            setTabContent(newTabContent);
        }
    }, [active, tabs, tabContent]);

    return (
        <>
            <div className="tabs">
                {tabs.map(({ title, devOnly }, index) => {
                    if (
                        devOnly === true &&
                        import.meta.env.MODE !== "development"
                    ) {
                        return null;
                    }
                    return (
                        <div
                            key={title}
                            className={
                                "tab" +
                                (index === active ? " active" : "") +
                                (tabs[index].mobileOnly ? " mobile-only" : "")
                            }
                            onClick={() => setActive(index)}
                        >
                            <h2>{title}</h2>
                        </div>
                    );
                })}
            </div>

            {tabContent.map((content, i) => (
                <div
                    className={`tab-wrapper ${tabs[i].isDark ? " dark" : ""}`}
                    key={i}
                    style={{ display: i === active ? "" : "none" }}
                >
                    {content}
                </div>
            ))}
        </>
    );
}
