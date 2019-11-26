import React from 'react';
import Button from './Button';
import { Link } from "react-router-dom";



const TreatmentPage = (props) => {
    const { classImage, image, titlePage } = props;

    return (
        <div className="main">
            <img src={image} alt="pill" className={classImage}></img>
            <h2 className="main_title">{titlePage}</h2>
            <h3 className="main_subtitle">Here you can register and see your flare-ups treatment</h3>
            <div className="treatmentPage_button--container">
                <Link to="/My-Health-Log/treatmentList">
                    <Button nameButton="TREATMENT LIST" classButton="treatmentPage_button" />
                </Link>
                <Link to="/My-Health-Log/treatment/register">
                    <Button nameButton="REGISTER" classButton="treatmentPage_button" />
                </Link>
            </div>
        </div >
    )
}

export default TreatmentPage;