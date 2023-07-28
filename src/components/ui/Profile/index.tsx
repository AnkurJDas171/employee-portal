import React from "react";
import ProfileDescription from "./ProfileDescription";

const Profile = () => {
    return (
        <section
            className="
                absolute 
                top-0 
                left-0
                h-screen 
                w-full 
                flex 
                justify-end 
                p-2 
                bg-white-transparent
            "
        >
            <div className="h-full bg-white w-96 shadow-profile-menu">
                <ProfileDescription />
            </div>
        </section>
    )
}

export default Profile
