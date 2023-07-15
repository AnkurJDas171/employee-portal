import React from "react"

import { navbarItem } from "../types";

const NavbarItem = ({ title, isFocused }: navbarItem) => {
    return (
        <span
            className={`
                ${isFocused ? 'text-zinc-200' : 'text-zinc-600'}
                cursor-pointer
                hover:text-zinc-50
                px-4 
            `}
        >
            {title}
        </span>
    )
}

export default NavbarItem;
