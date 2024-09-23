import React from "react";

export default function Button({
    btnText = "",
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:bg-blue-700 active:scale-95 active:bg-blue-800 ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {btnText}
        </button>
    );
}
