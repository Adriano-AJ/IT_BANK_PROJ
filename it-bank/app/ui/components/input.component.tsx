import * as React from 'react';

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
    return (
        <input
            {...props}
            ref={ref}
        />
    )
})

export {Input}