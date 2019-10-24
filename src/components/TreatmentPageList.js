import React from 'react';
import Footer from './Footer';
import "../stylesheets/TreatmentPage.scss"
import Button from './Button';
import { Link } from "react-router-dom";



const renderListTreatment = (flareTreatment, medicationName) => {
    flareTreatment.sort(function (a, b) {
        if (a.date < b.date) {
            return 1;
        }
        if (a.date > b.date) {
            return -1;
        }
        return 0;
    });
    const listDays = [];

    return flareTreatment.map((day, index) => {
        if (listDays.includes(day.date) === false) {
            listDays.push(day.date)
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
            return (
                <div className="medication_dose--container" key={index} >
                    <h3 className="dateListItem">{date}</h3>
                    <div className="pillContainer">
                        <h4 className="doseTime">{day.treatment[0].time} </h4>
                        <div className="pill yellow" ></div> <p className="pillName">
                            {day.treatment[0].pill}
                        </p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="medication_dose--container" key={index} >
                    <div className="pillContainer">
                        <h4 className="doseTime">{day.treatment[0].time} </h4>
                        <div className="pill yellow" ></div> <p className="pillName">
                            {day.treatment[0].pill}
                        </p>
                    </div>
                </div>
            )
        }
    })
}



const TreatmentPageList = (props) => {
    const { flareTreatment, titlePage, image, classImage, medicationName } = props
    return (
        <div className="main" >
            <img src={image} alt="pill" className={`treatmentPageListImp ${classImage}`}></img>
            <h2 className="main_title">{titlePage}</h2>

            <div>{renderListTreatment(flareTreatment, medicationName)}</div>

            <Link to="/My-Health-Log/treatment">
                <Button nameButton="Back" classButton="treatmentPage_button" />
            </Link>
            <Footer />
        </div>
    )
}

export default TreatmentPageList;
