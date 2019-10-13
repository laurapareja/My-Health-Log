import React from 'react';

const Button = (props) => {
    const { classButton, nameButton } = props;
    return (
        <button className={`button ${classButton}`}>{nameButton}</button>
    )
}

export default Button;