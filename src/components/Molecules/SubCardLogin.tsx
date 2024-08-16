import React from "react";

export function SubCardLogin() {

    return (
        <div
            className="flex flex-col items-center justify-center border border-gray-800 rounded-md px-8 py-4">
                        <span className="text-sm font-semibold text-blue-500">
                             Sign in with a passkey <br/>
                        </span>
            <div>
                             <span className="text-sm font-normal">
                            New to GitHub?
                        </span>
                <span className="text-sm  text-blue-500 ml-2">
                                 Create an account
                            </span>
            </div>
        </div>

    )
}
