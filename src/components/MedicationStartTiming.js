import React from 'react';



const MedicationStartTiming = (props) => {


    const handleChange = (event) => {
        const firstDose = 'firstDose';
        props.getInfoState(event, firstDose)
    }

    return (
        <div>
            <label htmlFor="startTiming">¿A qué hora quieres empezar?</label>
            <select name="startTiming" id="startTiming" onChange={handleChange}>
                <option value="hora">Hora</option>
                <option value="8">08:00</option>
                <option value="9">09:00</option>
                <option value="10">10:00</option>
                <option value="11">11:00</option>
                <option value="12">12:00</option>
                <option value="13">13:00</option>
                <option value="14">14:00</option>
                <option value="15">15:00</option>
                <option value="16">16:00</option>
                <option value="17">17:00</option>
                <option value="18">18:00</option>
                <option value="19">19:00</option>
                <option value="20">20:00</option>
                <option value="21">21:00</option>
                <option value="22">22:00</option>
            </select>
        </div>
    )
}

export default MedicationStartTiming;