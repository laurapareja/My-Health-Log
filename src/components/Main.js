import React from 'react';

const Main = (props) => {

    const { name } = props;
    return (
        <main className="main">
            {name}
        </main>
    )
}

export default Main;