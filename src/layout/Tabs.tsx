import "./Tabs.css";

interface TabData {
    id: string;
    title: string;
    isDark?: boolean;
    mobileOnly?: boolean;
    devOnly?: boolean;
    content: () => React.ReactNode;
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
    const activeTab = tabs[active];
    return (
        <>
            <div className="tabs">
                {tabs.map(({ id, title, devOnly }, index) => {
                    if (
                        devOnly === true &&
                        import.meta.env.MODE !== "development"
                    ) {
                        return null;
                    }
                    return (
                        <div
                            key={id}
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

            <div className={`tab-wrapper ${activeTab.isDark ? " dark" : ""}`}>
                {activeTab.content()}
            </div>
        </>
    );
}
