import "./Turbo.css";
import { useParamsContext } from "../ModelState";
import { useEffect } from "react";
import { getUrlParam } from "../utils";

const URL_PARAM = "turbo";

export function Turbo() {
    let { setIsTurbo } = useParamsContext();
    useEffect(() => {
        setIsTurbo(getUrlParam(URL_PARAM) === "true");
    }, []);
    return (
        <div className="turbo-hover">
            <button
                onClick={() => {
                    let url = new URL(window.location.href);
                    url.searchParams.set("turbo", "true");
                    window.history.pushState({}, "", url);
                    setIsTurbo(true);
                }}
            >
                Turbo
            </button>
        </div>
    );
}
