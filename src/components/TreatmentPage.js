import React from 'react';


const renderMonthName = (flareTreatment) => {
    return flareTreatment.map(month => {
        const list = month.map((day, index) => {

            const dayList = day.treatment.map((dose, index) => {
                return (
                    <div className="medication_dose--container" key={index}>
                        <h4>{dose.time} </h4>
                        <p>{dose.pill}</p>
                    </div>
                )
            })
            return <div key={index} className="medication_dose--day">
                ----- {day.date}-----
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
        </div >
    )
}

export default TreatmentPage;