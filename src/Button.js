import React from 'react';

function Button(props) {

    const {className,onClick,children,name} = props

    return (
        <button onClick={onClick}
        className={`group text-4xl w-full h-full font-bold border border-[#000000]
                    transition-all duration-200 ${className}`}
        name={name}
    

        >
        {children}
        </button>
    );
}

export default Button;