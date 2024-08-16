import React from "react";
import {Search} from 'lucide-react'
import {ItemMenu} from "@/components/Molecules/ItemMenu";

export function MenuCredentials() {
    return (
        <div className="flex items-center gap-6">
            <div className="border rounded-md border-gray-600 p-2">
                <Search size="16"/>
            </div>
                <ItemMenu title={"Entrar"} visibility={"hidden"} textSize="text-sm" href="/login"/>
            <div className="border rounded-md border-gray-300 px-3 py-[0.3rem]">
                <ItemMenu title={"Inscrição"} visibility={"hidden"} textSize="text-sm" href={"#"}/>
            </div>
        </div>

    )
}