import React from "react";

import { navbarItem } from "../types";
import NavbarItem from "./NavbarItem";

const Navbar = ({ items }: { items: navbarItem[] }): JSX.Element => {
    return (
        <nav
            className="
                bg-gray-950 
                justify-center
                pt-3
                pb-4
                px-4
                rounded-full 
                self-center
                w-auto
            ">
            <ul>
                {items.map((item: navbarItem) =>
                    <NavbarItem
                        key={item.title}
                        title={item.title}
                        isFocused={item.isFocused}
                    />
                )}
            </ul>
        </nav>
    )
}

export default Navbar
