    import React from "react";
    import { Activity, Package, Shield, Code, Box, Edit, CheckSquare, MessageSquare } from 'lucide-react';

    interface propsItems {
        title?: string;
    }

    export function DropDownListMenu({ title }: propsItems) {
        const getMenuContent = () => {
            switch (title) {
                case "Produto":
                    return (
                        <div className="z-10 bg-white rounded-lg mt-2 hover:text-yellow-300 shadow-lg p-4">
                            <div className="flex items-center gap-8 text-black hover:text-yellow-300 ml-3">
                                <div className="flex items-center">
                                    <Activity/>
                                </div>
                                <div className="flex-1">
                                    <a href="#" className="block rounded-md no-underline">
                                        <strong className="block font-medium text-gray-900">Ações</strong>
                                        <span className="text-sm text-gray-600 whitespace-nowrap">Automatize qualquer fluxo de trabalho.</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-8 text-black hover:text-yellow-300 ml-3 mt-4">
                                <div className="flex items-center">
                                    <Package/>
                                </div>
                                <div className="flex-1">
                                    <a href="#" className="block rounded-md no-underline">
                                        <strong className="block font-medium text-gray-900">Pacotes</strong>
                                        <span className="text-sm text-gray-600 whitespace-nowrap">Hospedar e gerenciar pacotes.</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-8 text-black hover:text-yellow-300 ml-3 mt-4">
                                <div className="flex items-center">
                                    <Shield/>
                                </div>
                                <div className="flex-1">
                                    <a href="#" className="block rounded-md no-underline">
                                        <strong className="block font-medium text-gray-900">Segurança</strong>
                                        <span className="text-sm text-gray-600 whitespace-nowrap">Encontre e corrija vulnerabilidades.</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-8 text-black hover:text-yellow-300 ml-3 mt-4">
                                <div className="flex items-center">
                                    <Shield/>
                                </div>
                                <div className="flex-1">
                                    <a href="#" className="block rounded-md no-underline">
                                        <strong className="block font-medium text-gray-900">Espaços de código</strong>
                                        <span className="text-sm text-gray-600 whitespace-nowrap">Ambientes de desenvolvimento instantâneo.</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                default:
                    return null;
            }
        };

        return getMenuContent();
    }
