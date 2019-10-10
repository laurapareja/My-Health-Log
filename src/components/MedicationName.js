import React from 'react';

const MedicationName = (props) => {
    const handleChange = (event) => {
        const medicationName = 'medicationName';
        props.getInfoState(event, medicationName)
    }
    return (
        <main className="medicationName">
            <label htmlFor="medicationName">Nombre medicación</label>
            <input type="text" id="medicationName" placeholder="Nombre" onChange={handleChange}></input>
        </main>
    )
}

export default MedicationName;