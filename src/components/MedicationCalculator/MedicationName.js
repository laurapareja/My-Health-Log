import React from 'react';

const MedicationName = (props) => {
    const handleChange = (event) => {
        const medicationName = 'medicationName';
        props.getInfoState(event, medicationName)
    }
    return (
        <main className="medicationName">
            <label className="inputContent" htmlFor="medicationName">Medication Name</label>
            <input type="text" id="medicationName" placeholder="Name" onChange={handleChange}></input>
        </main>
    )
}

export default MedicationName;