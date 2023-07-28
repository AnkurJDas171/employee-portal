import React from "react";

const Button = ({ title, propStyle = '' }: { title: string, propStyle?: string }): JSX.Element => {
    return (
        <button
            className={`
                py-2
                px-5
                bg-pink-400
                text-red-50
                rounded-md
                shadow-xl
                text-center
                ${propStyle}
            `}
        >
            {title}
        </button>
    );
};

export default Button;
