import React from "react";

const Validation = props => {
    const minLength = 5;
    const maxLength = 10;

    const length = props.text.length;
    const textTooShort = length < minLength;
    const textTooLong = length > maxLength;

    return (
        <div style={{color: 'red'}}>
            {textTooShort ? <span>Text too short.</span> : null}
            {textTooLong ? <span>Text too long.</span> : null}
        </div>
    )
};

export default Validation;