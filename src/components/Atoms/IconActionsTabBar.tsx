import React from "react";

export function IconActionsTabBar() {
    return (
        <button className=" flex items-center gap-2 px-2 py-1 hover:bg-zinc-800 hover:rounded-md">
            <div dir="rtl">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                     data-view-component="true"
                     className="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline"
                     fill="white">
                    <path
                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
                </svg>
            </div>
            <div className="font-mono">Actions</div>
        </button>
    )
}