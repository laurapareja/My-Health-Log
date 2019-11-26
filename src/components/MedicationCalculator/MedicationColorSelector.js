import React from 'react';

const MedicationColorSelector = (props) => {
    const colorSelected = props.colorSelected;
    const handleChange = (event) => {
        const colorSelected = 'colorSelected';
        props.getInfoState(event, colorSelected)
    }
    return (
        <div className="inputContainer">
            <label className="inputContent" htmlFor="medicationColor">
                Select a color
            </label>
            <select name="colors" id="medicationColor" onChange={handleChange} className={`${colorSelected} colorselector`} value={colorSelected}>
                <option value="blue" className="blue colorselector"></option>
                <option value="yellow" className="yellow colorselector" ></option>
                <option value="orange" className="orange colorselector"></option>
                <option value="purple" className="purple colorselector"></option>
                <option value="green" className="green colorselector"></option>
                <option value="red" className="red colorselector"></option>
            </select>
        </div>
    )
}

export default MedicationColorSelector;