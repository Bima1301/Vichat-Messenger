'use client';
import clsx from 'clsx';

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disable?: boolean;
}
const Button = ({ type, children, danger, disable, fullWidth, onClick, secondary }: ButtonProps) => {
    return (
        <button onClick={onClick} type={type} disabled={disable} className={clsx(`flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`, disable && "opacity-80 cursor-default", fullWidth && "w-full", secondary ? "text-green-900" : "text-black", danger && "bg-rose-500 hover:bg-red-600 focus-visible:outline-rose-600", !secondary && !danger && "bg-[#F4d853] hover:bg-[#dcc24b] focus-visible:outline-sky-600 ")} >
            {children}
        </button>
    );
}

export default Button;