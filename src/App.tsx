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

export const TABS = [
    { title: "Mitigation", content: () => <EpiCurve /> },

    {
        title: "Detection",
        content: () => <Detection />,
    },
    { title: "Summary", content: () => <SummaryTable /> },

    {
        title: "Editor",
        isDark: true,
        mobileOnly: true,
        content: () => <MobileEditor />,
    },
];

function App() {
    const [activeTab, setActiveTab] = useState(0);
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
