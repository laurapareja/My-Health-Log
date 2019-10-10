import React from 'react';

const MedicationColorSelector = (props) => {
    const handleChange = (event) => {
        const colorSelected = 'colorSelected';
        props.getInfoState(event, colorSelected)
    }
    return (
        <div>
            <label htmlFor="medicationColor">Selecciona etiqueta color</label>
            <select name="colors" id="medicationColor" onChange={handleChange}>
                <option value="color">color</option>
                <option value="blue">azul</option>
                <option value="yellow">amarillo</option>
                <option value="orange">naranja</option>
                <option value="purple">morado</option>
                <option value="green">verde</option>
                <option value="red">rojo</option>
            </select>
        </div>
    )
}

export default MedicationColorSelector;