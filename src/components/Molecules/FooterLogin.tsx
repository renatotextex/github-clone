import React from "react";
import { Link } from "@/components/Molecules/Link";

export function FooterLogin() {
    return (
        <div className="flex items-center justify-center gap-5 text-xs mt-12">
            <Link text={"Terms"} href={"https://docs.github.com/pt/site-policy/github-terms/github-terms-of-service"}/>
            <Link text={"Privacy"}
                  href={"https://docs.github.com/pt/site-policy/privacy-policies/github-general-privacy-statement"}/>
            <Link text={"Docs"} href={"https://docs.github.com/pt"}/>
            <Link text={"Contact GitHub Support"} href={"https://support.github.com/request/landing"}/>
            <Link text={"Manage cookies"} href={""}/>
            <Link text={"Do not share my personal information"} href={""}/>
        </div>

    )
}