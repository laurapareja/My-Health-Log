import React from 'react';

const Button = (props) => {
    const { classButton, nameButton, actionButton, disabled } = props;
    return (
        <button className={`button ${classButton}`} onClick={actionButton} disabled={disabled}>{nameButton}</button>
    )
}

export default Button;