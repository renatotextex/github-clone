import {BookMarked} from "@/components/Atoms/BookMarked";
import React from "react";

interface Props {
    html_user?: string;
    html_repo?: string;
    name?: string;
    login?: string;
}

export function SubHeader({ html_user, html_repo, name, login }: Props) {

    return (
        <div className="flex place-items-baseline mt-2 ml-8">
            <BookMarked/>
            <a href={html_user}
               className="flex hover:underline text-blue-500 mr-1 text-xl font-light ">{login}</a>
            <span className="scale-125 font-serif">/</span>
            <a href={html_repo}
               className="flex hover:underline text-blue-500 p-1 text-xl font-semibold ">{name}</a>
            <span className="border rounded-full border-gray-600 px-2 font-light text-xs">Público</span>
        </div>

    )
}
