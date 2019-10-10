import React from 'react';

const MedicationInstruction = (props) => {
    const handleChange = (event) => {
        const medicationInstruction = 'medicationInstruction';
        props.getInfoState(event, medicationInstruction)
    }
    return (
        <div>
            <label htmlFor="medicationInstruction">cada</label>
            <select name="guidelineDose" id="guidelineDose" onChange={handleChange}>
                <option value="cantidad"></option>
                <option value="24">24</option>
                <option value="12">12</option>
                <option value="6">6</option>
                <option value="4">4</option>
                <option value="3">3</option>
            </select>
            <label htmlFor="medicationInstruction">horas</label>
        </div>
    )
}

export default MedicationInstruction;