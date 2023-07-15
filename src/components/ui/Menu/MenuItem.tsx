import React from "react"
import { Link } from "react-router-dom"

import { menuItem } from "../types"

const MenuItem = ({ height, isFocused, title, path }: menuItem) => {
    return (
        <Link to={path}>
            <div
                className={
                    `${isFocused ? 'bg-selected-menu-item' : 'bg-unselected-menu-item'} 
                    hover:bg-selected-menu-item
                    text-xl text-center  text-slate-900
                    flex justify-center items-center `
                }
                style={{
                    height,
                    width: height * 2.5
                }}
            >
                <span>{title}</span>
            </div>
        </Link>
    )
}

export default MenuItem
