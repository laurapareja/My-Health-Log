import React from 'react';

const MedicationQuantitySelector = () => {
    return (
        <div>
            <label htmlFor="medicationQuantity">Cantidad</label>
            <select name="dose" id="dose">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}

export default MedicationQuantitySelector;