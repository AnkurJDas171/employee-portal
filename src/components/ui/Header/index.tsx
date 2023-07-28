import React from "react";
import Navbar from "../Navbar";

import menu from '../../../assets/icons/png/menu.png';
import profile from '../../../assets/icons/png/female-icon.png';


const tempItems = [
    {
        title: 'Overview',
        isFocused: true
    },
    {
        title: 'Updates',
        isFocused: false
    },
    {
        title: 'Meetings',
        isFocused: false
    },
    {
        title: 'Feedback',
        isFocused: false
    },
]


const Header = React.memo(({ changeMenuState }: { changeMenuState: any }): JSX.Element => {
    return (
        <header className="header h-auto">
            <div className="flex justify-between">
                <div
                    className="cursor-pointer"
                    onClick={() => {
                        changeMenuState((prevState: boolean): boolean => !prevState);
                    }}
                >
                    <img
                        src={menu}
                        alt="menu logo"
                        className="h-14 my-12"

                    />
                </div>
                <Navbar items={tempItems} />
                <div
                    className="cursor-pointer"
                >
                    <img
                        src={profile}
                        alt="menu logo"
                        className="h-14 my-12"
                    />
                </div>
            </div>
        </header>
    )
})

export default Header;
