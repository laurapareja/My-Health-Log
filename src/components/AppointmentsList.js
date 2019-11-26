import React from 'react';
import { Link } from "react-router-dom";
import Button from './Button';
import "../stylesheets/Appointments.scss"

const AppointmentsList = (props) => {
    const { renderMonthName, classImage, image, titlePage } = props;

    return (
        <div className="main appointments">
            <img src={image} alt="appointment" className={`treatmentPageListImp ${classImage}`}></img>
            <h2 className="main_title">{titlePage}</h2>
            {renderMonthName}
            <ul>
                <li>Monday 21 October</li>
                <li>Tuesday 22 October</li>
                <li>Wednesday 23 October</li>
                <li>Thursday 24 October</li>
            </ul>
            <Link to="/My-Health-Log/appointments">
                <Button nameButton="Back" classButton={`treatmentPage_button buttonAppointment`} />
            </Link>
        </div >
    )
}

export default AppointmentsList;