import React from 'react';

const TextInput = ({ id }: { id: string }): JSX.Element => {
    return (
        <input style={{ backgroundColor: "red" }} type='text' id={id} name={id}></input>
    )
}

export default TextInput
