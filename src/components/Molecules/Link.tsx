"use client";

import React, {useState} from "react";
import {ModalCookiePreferences} from "@/components/Molecules/ModalCookiePreferences";

interface Props {
    text?: string;
    href?: string;
}

export function Link({ text, href}: Props) {

    const [ modal, setModal ] = useState(false);

    const openModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }


    return (
        <>
            <a href={href} className="hover:text-blue-500 hover:underline" onClick={openModal}>
                {text}
            </a>
            <ModalCookiePreferences isOpen={modal} onClose={closeModal}/>
        </>
    )
}
