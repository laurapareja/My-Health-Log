import React from 'react';
import Footer from './Footer';
import "../stylesheets/TreatmentPage.scss"
import Button from './Button';
import { Link } from "react-router-dom";



const renderMonthName = (flareTreatment, colorSelected, medicationName) => {

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

    flareTreatment.map(day => {
        if (listDays.includes(day.date) === false) {
            return listDays.push(day.date)
        }
    })

    const list = flareTreatment.map((dayItem, index) => {

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
        const date = formatDate(new Date(dayItem.date))
        return (
            <div className="medication_dose--container" key={index}>                <h4 className="dateListItem">{date}</h4>
                <div className="pillContainer">
                    <h4 className="doseTime">{dayItem.treatment[0].time} </h4>
                    <div className="pill yellow" ></div> <p className="pillName">
                        {dayItem.treatment[0].pill}
                    </p>
                </div>
            </div>
        )
    })
    return list
}



const TreatmentPageList = (props) => {
    const { flareTreatment, titlePage, image, classImage, colorSelected, medicationName } = props
    return (
        <div className="main" >
            <img src={image} alt="pill" className={`treatmentPageListImp ${classImage}`}></img>
            <h2 className="main_title">{titlePage}</h2>
            <div>{renderMonthName(flareTreatment, colorSelected, medicationName)}</div>
            <Link to="/My-Health-Log/treatment">
                <Button nameButton="Back" classButton="treatmentPage_button" />
            </Link>
            <Footer />
        </div>
    )
}

export default TreatmentPageList;
