import React from 'react';
import "../stylesheets/Header.scss"


const Header = (props) => {
    const image = props.image;
    return (
        <header className="header">
            My Health Log <img alt="website logo" src={image} className="heartLogo"></img>
        </header>
    )
}

export default Header;