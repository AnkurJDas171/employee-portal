import React from "react";

import Button from "../Button/Button";
import image from '../../../assets/icons/png/female-icon.png';
import { MY_ACCOUNT, SIGN_OUT } from "../../../assets/constants/variables";

const ProfileDescription = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-profile-menu-color" style={{ height: '38%' }}>
            <div id='profile-image'>
                <img
                    alt='profile'
                    src={image}
                />
            </div>
            <div id='profile-description' className="flex-row justify-center items-center my-5">
                <span id="id-and-name" className="block text-center text-lg font-urbanistBold">87 - Ankur Jyoti Das</span>
                <span id="email" className="block text-center text-blue-700">ankur@coffeebeans.io</span>
                <span id="designation" className="block text-center font-semibold">SDEL1</span>
            </div>
            <div id='profile-button'>
                <Button
                    title={MY_ACCOUNT}
                    propStyle={'m-5'}
                />
                <Button
                    title={SIGN_OUT}
                    propStyle={'shadow-none bg-transparent text-red-500 font-urbanistBold m-5'}
                />
            </div>
        </div>
    )
}

export default ProfileDescription;
