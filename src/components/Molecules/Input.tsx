import React, { forwardRef } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
}


const Input = forwardRef<HTMLInputElement, Props>(({ type = 'text', ...props }, ref) => {
    return (
        <div className="flex flex-col items-center">
            <input className="bg-customBlue border border-gray-800 focus:outline-none focus:ring-1 focus:border-blue-700 rounded-md p-0.5 w-64" type={type} ref={ref} {...props}/>
        </div>


    );
});

export default Input
