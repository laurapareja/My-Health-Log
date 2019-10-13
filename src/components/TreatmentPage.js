import React from 'react';
import Footer from './Footer';


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



const TreatmentPage = (props) => {
    const { classImage, image, titlePage, flareTreatment } = props;

    return (
        <div className="main">
            <h2 className="main_title">{titlePage}</h2>
            <img src={image} alt="pill" className={classImage}></img>
            <div>{renderMonthName(flareTreatment)}</div>
            <Footer />
        </div >
    )
}

export default TreatmentPage;