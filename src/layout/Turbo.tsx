import "./Turbo.css";
import { useParamsContext } from "../ModelState";
import { useEffect } from "react";

const URL_PARAM = "turbo";

function checkUrl() {
    // Adding ?turbo=true to the URL will disable debouncing
    let queryParams = new URLSearchParams(window.location.search);
    return queryParams.get(URL_PARAM) === "true";
}

export function Turbo() {
    let { setIsTurbo } = useParamsContext();
    useEffect(() => {
        setIsTurbo(checkUrl());
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
