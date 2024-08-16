import React from "react";
import { LogoMd } from "@/components/Atoms/Logo";
import { LoginForm } from "@/components/Molecules/LoginForm";
import { SubCardLogin } from "@/components/Molecules/SubCardLogin";
import { FooterLogin } from "@/components/Molecules/FooterLogin";
import { HeaderTitle } from "@/components/Molecules/HeaderTitle";


const Login: React.FC = () => {
    return (
        <main>
            <div className="flex items-center justify-center p-9">
                <div className="flex flex-col items-center space-y-4">
                    <LogoMd height={48} width={48}/>
                    <HeaderTitle/>
                    <LoginForm/>
                    <SubCardLogin/>
                </div>
            </div>
            <FooterLogin/>
        </main>
);
};

export default Login;
