import React from 'react';

const Header = (props) => {
    const image = props.image;
    return (
        <header className="headerCalculator">
            <img className="calculator_picture" src={image} alt="calculator"></img>
            <h2 className="main_title">Doses Calculator</h2>
        </header>
    )
}

export default Header;