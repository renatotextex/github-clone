import React from "react";

export function IconInsightsTabBar() {
    return (
        <button className=" flex items-center gap-2 px-2 py-1 hover:bg-zinc-800 hover:rounded-md">
            <div dir="rtl">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                     data-view-component="true"
                     className="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline"
                     fill="white">
                    <path
                        d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
                </svg>
            </div>
            <div className="font-mono">Insigths</div>
        </button>
    )
}