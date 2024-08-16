import React from "react";
import {ItemMenu} from "@/components/Molecules/ItemMenu";

export function MenuVert() {
    return (
        <div className="flex items-center ml-6 gap-3 shadow-xl">
            <ItemMenu title={"Produto"} textSize={""} visibility={"visible"}/>
            <ItemMenu title={"Soluções"} textSize={""} visibility={"visible"}/>
            <ItemMenu title={"Recursos"} textSize={""} visibility={"visible"}/>
            <ItemMenu title={"Código aberto"} textSize={""} visibility={"visible"}/>
            <ItemMenu title={"Empresa"} textSize={""} visibility={"visible"}/>
            <ItemMenu title={"Precificação"} textSize={""} visibility={"hidden"}/>
        </div>

)
}