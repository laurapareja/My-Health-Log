import React from 'react';

const MedicationColorSelector = (props) => {
    const handleChange = (event) => {
        const colorSelected = 'colorSelected';
        props.getInfoState(event, colorSelected)
    }
    return (
        <div className="inputContainer">
            <label className="inputContent" htmlFor="medicationColor">
                Select a color
            </label>
            <select name="colors" id="medicationColor" onChange={handleChange}>
                <option value="color"></option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
                <option value="orange">orange</option>
                <option value="purple">purple</option>
                <option value="green">green</option>
                <option value="red">red</option>
            </select>
        </div>
    )
}

export default MedicationColorSelector;