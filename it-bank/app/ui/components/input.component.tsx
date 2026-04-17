import * as React from 'react';
import { mergeClassNames } from '@/app/lib/css.helpers';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const inputCn = "border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

const Input = React.forwardRef<HTMLInputElement, InputProps>((

    { 
        type,
        className,
        ...props
    },
    ref

) => {
    return (
        <input
            className={mergeClassNames(inputCn, className)}
            type={type}
            {...props}
            ref={ref}
        />
    )
})

export {Input}