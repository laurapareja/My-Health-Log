import React from 'react';
import Footer from './Footer';
import "../stylesheets/TreatmentPage.scss"
import Button from './Button';
import { Link } from "react-router-dom";



const renderMonthName = (flareTreatment) => {
    return flareTreatment.map(month => {
        const list = month.map((day, index) => {

            const dayList = day.treatment.map((dose, index) => {
                return (
                    <div className="medication_dose--container" key={index}>
                        <div className={`pill ${dose.pill}`} ></div>
                        <h4 className="doseTime">{dose.time} </h4>
                        <p className="pillName">{dose.pill}</p>
                    </div>
                )
            })
            const formatDate = (date) => {
                var monthNames = [
                    "January", "February", "March",
                    "April", "May", "June", "July",
                    "August", "September", "October",
                    "November", "December"
                ];

                var day = date.getDate();
                var monthIndex = date.getMonth();
                var year = date.getFullYear();

                return day + ' ' + monthNames[monthIndex] + ' ' + year;
            }
            const date = formatDate(new Date(day.date))
            return <div key={index} className="medication_dose--day">
                <p className="dateListItem"> {date}</p>
                {dayList}
            </div>
        })
        return list
    })
}



const TreatmentPageList = (props) => {
    const { flareTreatment, titlePage, image, classImage } = props
    return (
        <div className="main" >
            <img src={image} alt="pill" className={`treatmentPageListImp ${classImage}`}></img>
            <h2 className="main_title">{titlePage}</h2>
            <div>{renderMonthName(flareTreatment)}</div>
            <Link to="/My-Health-Log/treatment">
                <Button nameButton="Back" classButton="treatmentPage_button" />
            </Link>
            <Footer />
        </div>
    )
}

export default TreatmentPageList;