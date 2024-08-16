"use client";

import { ChevronDown } from 'lucide-react';
import React, { useState, useRef } from "react";
import {DropDownListMenu} from "@/components/Molecules/DropDownListMenu";
import Link from "next/link";

interface propsItems {
    title?: string;
    textSize?: string;
    visibility?: string;
    href?: string;
}

export function ItemMenu({ title, textSize, visibility, href }: propsItems) {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);


    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current ?? undefined);
        if (title === "Entrar" || title === "Inscrição") {
            return;
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 120);
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {href ? (
            <Link href={href} className="flex items-center gap-1">
                <span className={`hover:text-zinc-500 transition-colors ${textSize}`}>{title}</span>
                <ChevronDown size="18" className={`text-zinc-500 ${visibility === "hidden" ? "hidden" : ""}`} />
            </Link>) : (
                <Link href="#" className="flex items-center gap-1">
                    <span className={`hover:text-zinc-500 transition-colors ${textSize}`}>{title}</span>
                    <ChevronDown size="18" className={`text-zinc-500 ${visibility === "hidden" ? "hidden" : ""}`}/>
                </Link>
            )}
            {isOpen && (
                <div
                    className="absolute z-10 flex items-center"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <DropDownListMenu title={title} />
                 </div>
            )}
        </div>
    );
}
