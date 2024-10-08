import React from "react";

export function IconProjectsTabBar() {
    return (
        <button className=" flex items-center gap-2 px-2 py-1 hover:bg-zinc-800 hover:rounded-md">
            <div dir="rtl">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                     data-view-component="true"
                     className="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline"
                     fill="white">
                    <path
                        d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
                </svg>
            </div>
            <div className="font-mono">Projects</div>
        </button>
    )
}