import React from 'react';
import "../stylesheets/Appointments.scss"

const Appointments = (props) => {
    const { renderMonthName, classImage, image, titlePage } = props;

    return (
        <div className="main appointments">
            <h2 className="main_title">{titlePage}</h2>
            <img src={image} alt="appointment" className={classImage}></img>
            {renderMonthName}
            <ul>
                <li>Monday 21 October</li>
                <li>Tuesday 22 October</li>
                <li>Wednesday 23 October</li>
                <li>Thursday 24 October</li>
            </ul>
        </div >
    )
}

export default Appointments;