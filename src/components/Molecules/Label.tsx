import React from "react";

interface Props {
    text?: string;
    htmlFor?: string;
}

export function Label({ text, htmlFor }: Props) {

    return (
        <div className="flex flex-col items-start">
            <label className="text-sm" htmlFor={htmlFor}>
                {text}
            </label>
        </div>

    )
}
