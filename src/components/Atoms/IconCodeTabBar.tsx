import React from "react";


export function IconCodeTabBar() {
    return (
        <button className=" flex items-center gap-2 px-2 py-1 hover:bg-zinc-800 hover:rounded-md">
            <div dir="rtl">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                     data-view-component="true"
                     className="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline">
                    <path
                        fill="white"
                        d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
                </svg>
            </div>
            <div className="font-mono">Code</div>
        </button>
    )
}