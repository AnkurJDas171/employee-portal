import React from "react";

import image from '../../../assets/icons/png/google-32px.png'

const SignInWithGoogle = (): JSX.Element => {
    return (
        <div className="flex flex-row items-center">
            <img
                src={image}
                alt="google logo"
                className="me-4"
            />
            <span className="font-urbanistBold text-xl">SignIn with Google</span>
        </div>
    )
}

export default SignInWithGoogle;
