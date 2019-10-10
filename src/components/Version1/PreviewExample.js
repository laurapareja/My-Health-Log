import React from 'react';

const renderPreviewHours = (dayHours, color) => {
    return dayHours.map((hour, index) => {
        return <div key={index} className={`hour${hour} hour ${color}`}></div>
    })
}

const PreviewExample = (props) => {
    const { color, dayHours, medicationName } = props;

    return (
        <div>
            <div className="previewExample">
                <h2>Ejemplo: </h2>
                <div className="day">
                    {renderPreviewHours(dayHours, color)}
                </div>
                <h3 className="previewTitle">Medicación: {medicationName}</h3>
                <ul className="js-listDose"></ul>
            </div>
        </div>
    )
}

export default PreviewExample;