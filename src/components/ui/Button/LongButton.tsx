import React from "react";

import { LongButtonType } from "../types";

const LongButton = ({ childrenComponent, handleButtonClick, style, text }: LongButtonType): JSX.Element => {
    return (
        <div
            className="px-5 py-3 rounded-full bg-tertiary-color cursor-pointer"
            onClick={handleButtonClick}
        >
            {childrenComponent ? childrenComponent : <span className={`${style}`}>{text}</span>}
        </div>
    )
}

export default LongButton;
