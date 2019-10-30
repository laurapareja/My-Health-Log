import React from 'react';
import "../stylesheets/Header.scss"


const Header = () => {
    return (
        <header className="header">
            My Health Log <img alt="website logo" src="../images/heart.png" className="heartLogo"></img>
        </header>
    )
}

export default Header;