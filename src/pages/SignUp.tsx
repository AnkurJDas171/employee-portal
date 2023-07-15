import React from "react";

import TextInput from "../components/forms/TextInput";
import LongButton from "../components/ui/Button/LongButton";
import SignUpWithGoogle from "../components/ui/Button/SignUpWithGoogle";

const SignUp = () => {
    const handleGoogleSignUp = () => {
        console.log('google sign up clicked')
    }

    return (
        <div className="h-full flex justify-center items-center">
            <LongButton
                childrenComponent={<SignUpWithGoogle />}
                handleButtonClick={handleGoogleSignUp}
            />
        </div>
    )
}

const CreateAccount = () => {
    return (
        <div className="border border-slate-950">
            <label htmlFor="email">Email:</label><br />
            <TextInput id={'email'} />
            <br /><br />
            <label htmlFor="email">Password:</label><br />
            <TextInput id={'email'} />
        </div>
    )
}

export default SignUp;
