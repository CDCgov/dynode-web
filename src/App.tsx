import { ParamsEditor } from "./views/ParamsEditor";
import { EpiCurve } from "./views/EpiCurve";
import { useResizable } from "react-resizable-layout";
import { DragBar } from "./layout/DragBar";
import { Tabs } from "./layout/Tabs";
import { PresetEditor } from "./views/PresetEditor";
import { SummaryTable } from "./views/SummaryTable";
import "./App.css";
import { MobileEditor } from "./views/MobileEditor";
import { Turbo } from "./layout/Turbo";
import { Detection } from "./views/Detection";
import { useState } from "react";
import { DevInfo } from "./views/DevInfo";
import { getUrlParam } from "./utils";

export const TABS = [
    { id: "mitigation", title: "Mitigation", content: () => <EpiCurve /> },

    {
        id: "detection",
        title: "Detection",
        content: () => <Detection />,
    },
    { id: "summary", title: "Summary", content: () => <SummaryTable /> },

    {
        id: "editor",
        title: "Editor",
        isDark: true,
        mobileOnly: true,
        content: () => <MobileEditor />,
    },
    {
        id: "dev",
        title: "Dev Info",
        devOnly: true,
        content: () => <DevInfo />,
    },
];

let urlTabId = getUrlParam("tab");
let initialTabIndex = urlTabId
    ? TABS.findIndex((tab) => tab.id === urlTabId)
    : -1;
if (initialTabIndex === -1) {
    initialTabIndex = 0;
}

function App() {
    const [activeTab, setActiveTab] = useState(initialTabIndex);
    const resizeLeft = useResizable({
        axis: "x",
        initial: 250,
        min: 200,
    });
    const resizeRight = useResizable({
        axis: "x",
        initial: 320,
        min: 200,
        reverse: true,
    });
    return (
        <div className="app">
            <aside style={{ width: resizeLeft.position }}>
                <PresetEditor />
            </aside>
            <DragBar
                isDragging={resizeLeft.isDragging}
                {...resizeLeft.separatorProps}
            />
            <main>
                <Tabs active={activeTab} setActive={setActiveTab} tabs={TABS} />
            </main>
            <DragBar
                isDragging={resizeRight.isDragging}
                {...resizeRight.separatorProps}
            />
            <aside style={{ width: resizeRight.position }}>
                <ParamsEditor activeTab={TABS[activeTab]} />
                <Turbo />
            </aside>
        </div>
    );
}

export default App;
