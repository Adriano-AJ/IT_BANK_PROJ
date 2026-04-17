import { mergeClassNames } from '@/app/lib/css.helpers';
import * as React from 'react';

const buttonTypes = {
    default: 'bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-pointer',
    sercundary: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer',
} as const;

export type ButtonTypes = {
   btnType:  keyof typeof buttonTypes;
}

const buttonSizes = {
   def: 'h-10 px-4 py-2',
   sm: 'h-10 rounded-md px-3',
   lg: 'h-10 rounded-md py-3',
   xl: 'h-10 px-4 py-2',
   icon: 'w-10 h-10'
} as const;

export type ButtonSizes = {
   btnSize:  keyof typeof buttonSizes;
}


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
   ButtonTypes, ButtonSizes {};


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((
    {
        className,
        btnType,
        btnSize,
        ...props
    }, ref
) => { 
    return (
        <button       
            className={mergeClassNames(
                buttonTypes[btnType],
                buttonSizes[btnSize],
                className
            )}
            ref={ref}
            {...props}
        />
    )
}
)

export {Button};