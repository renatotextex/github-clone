import React from "react";
import {Notifications} from "@/components/Atoms/Notifications";
import {Fork} from "@/components/Atoms/Fork";
import {Star} from "@/components/Atoms/Star";
import {DropDownStarButton} from "@/components/Atoms/DropDownStarButton";

interface Props {
    forksCount?: number;
    starCount?: number;
}

export function ButtonsSubHeader({ forksCount, starCount }: Props) {

    return (
        <div className="flex gap-2 mt-2 ml-8">
            <a href="#"
               className="flex bg-customGrayButton hover:border-zinc-600 border rounded-md px-3.5 py-1 border-gray-700 text-white text-xs font-normal">
                <Notifications/></a>
            <a href="#"
               className="flex bg-customGrayButton hover:border-zinc-600 border rounded-md px-3.5 py-1 border-gray-700 text-white text-xs font-normal">
                <Fork forksCount={forksCount}/> </a>
            <a href="#"
               className="flex bg-customGrayButton hover:border-zinc-600 border rounded-md px-3.5 py-1 border-gray-700 text-white text-xs font-normal">
                <Star starCount={starCount}/> </a>
                <DropDownStarButton/>
        </div>


    )
}
