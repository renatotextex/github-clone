import React from "react";


export function DropDownStarButton() {
    return (
        <div
            className=" flex items-center bg-customGrayButton border rounded-s-lg px-2 py-1 border-zinc-800 text-white text-xs font-normal -ml-3"
            dir="rtl">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                 data-view-component="true" className="octicon octicon-triangle-down">
                <path
                    fill="gray"
                    d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
            </svg>
        </div>
    )
}