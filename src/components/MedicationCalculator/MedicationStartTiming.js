import React from 'react';



const MedicationStartTiming = (props) => {
    const firstDose = props.firstDose;

    const handleChange = (event) => {
        const firstDose = 'firstDose';
        props.getInfoState(event, firstDose)
    }

    const hours = []
    for (let i = 0; i <= 24; i++) {
        hours.push(i)
    }

    return (
        <div className="inputContainer" >
            <label className="inputContent" htmlFor="startTiming">First Dose</label>
            <select name="startTiming" id="startTiming" onChange={handleChange} value={firstDose}>
                {hours.map((hour, index) => {
                    let hourWithPad = `${hour}`
                    if (hour < 10) {
                        hourWithPad = `0${hour}`
                    }
                    return (<option key={index} value={hour}>{hourWithPad}:00</option>)
                })}
            </select>
        </div>
    )
}

export default MedicationStartTiming;