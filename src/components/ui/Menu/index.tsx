import React, { useEffect, useRef, useState } from "react";
import { menuItem } from "../types";

import MenuItem from "./MenuItem";

const tempMenu = [
    {
        title: 'Home',
        isFocused: true,
        path: '/home',
        height: 0
    },
    {
        title: 'Leave Tracker',
        isFocused: false,
        path: '/leave-tracker',
        height: 0
    },
    {
        title: 'Time Tracker',
        isFocused: false,
        path: '/time-tracker',
        height: 0
    }
    , {
        title: 'Task',
        isFocused: false,
        path: '/task',
        height: 0
    },
    {
        title: 'Expense',
        isFocused: false,
        path: '/expense',
        height: 0
    }
]

const Menu = React.memo(({ isMenuVisible, changeMenuState }: { isMenuVisible: boolean, changeMenuState: any }): JSX.Element => {
    const menuRefHeight = useRef<number>(0)
    const [menuItems, setMenuItems] = useState<menuItem[]>([]);

    useEffect(() => {
        const { innerHeight } = window;
        const newItems = [...tempMenu];
        const menuItemHeight = innerHeight / (newItems.length + 1) ?? 0;

        menuRefHeight.current = menuItemHeight;
        setMenuItems(newItems);
    }, []);

    return (
        <>
            {
                isMenuVisible ?
                    <section
                        className="absolute h-screen bg-grey-transparent top-0 w-full"
                        onClick={() => changeMenuState(false)}
                    >
                        <div
                            className="absolute top-0 flex flex-col justify-evenly h-screen left-1"
                        >
                            {menuItems.map(item =>
                                <MenuItem
                                    height={menuRefHeight.current}
                                    isFocused={item.isFocused}
                                    key={item.title}
                                    title={item.title}
                                    path={item.path}
                                />
                            )}
                        </div>
                    </section> :
                    null
            }
        </>
    )
});

export default Menu;
