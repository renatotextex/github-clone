"use client";

import * as React from "react";
import {Label} from "@/components/Molecules/Label";
import Input from "@/components/Molecules/Input";
import {useForm, SubmitHandler } from "react-hook-form";
import { userStore } from "@/stores/user-store";
import { useNavigate } from "react-router-dom";

type FormData = {
    username: string;
    password: string;
};

export function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
//    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        userStore.setData({ username: data.username });
        console.log(data)
        console.log(userStore.data.username);

      //  navigate('/app/page');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className="bg-customCardContainer border border-gray-800 p-4 rounded-md space-y-5">
            <div className="space-y-2">
                <Label text={"Username or email address"} htmlFor={"username"}/>
                <Input type={"text"} {...register('username', {required: 'Username is required'})}/>
                {errors.username && <p className="text-red-500">{errors.username.message}</p>}
            </div>

            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <Label text={"Password"} htmlFor={"password"}/>
                    <a className="text-xs text-blue-500 hover:underline" href="#">Forgot password?</a>
                </div>
                <div className="flex flex-col items-center">
                    <Input type={"password"} {...register('password', {required: 'Password is required'})}/>
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button
                    className="border border-green-600 bg-green-700 rounded-md p-1 text-sm font-semibold w-full"
                    type="submit">Sign in
                </button>
            </div>
        </form>

    )
}
