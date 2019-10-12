import React from 'react';


const TreatmentPage = (props) => {
    const { renderMonthName, classImage, image, titlePage } = props;

    return (
        <div className="main">
            <h2 className="main_title">{titlePage}</h2>
            <img src={image} alt="pill" className={classImage}></img>
            <div>{renderMonthName}</div>
        </div >
    )
}

export default TreatmentPage;