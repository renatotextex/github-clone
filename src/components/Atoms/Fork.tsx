import React from "react";

interface Props {
    forksCount?: number;
}

export function Fork({forksCount}: Props) {
    return (
        <div className="flex items-center gap-1 w-full">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"
                 className="octicon octicon-repo-forked mr-2">
                <path fill="white"
                      d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
            </svg>
            <span>Fork</span>
            <span className="flex items-center justify-center bg-gray-700 rounded-full px-1.5 py-0.5 text-white text-xs font-normal ml-1">{forksCount}</span>
        </div>
    )
}