import React from 'react';
import Button from './Button';
import { Link } from "react-router-dom";



const AppointmentPage = (props) => {
    const { classImage, image, titlePage } = props;

    return (
        <div className="main">
            <img src={image} alt="pill" className={classImage}></img>
            <h2 className="main_title">{titlePage}</h2>
            <h3 className="main_subtitle">Here you can register and see your doctor appointments</h3>
            <div className="treatmentPage_button--container">
                <Link to="/My-Health-Log/appointmentsList">
                    <Button nameButton="APPOINTMENT LIST" classButton="treatmentPage_button" />
                </Link>
                <Button nameButton="REGISTER" classButton="treatmentPage_button" />
            </div>
        </div >
    )
}

export default AppointmentPage;