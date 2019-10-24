import React from 'react';
// import { Link } from "react-router-dom";
// import Button from './Button';
import "../stylesheets/Settings.scss"


const renderMedicationRegistered = (medicationRegistered) => {
    return medicationRegistered.medicationRegistered.map(item => {
        return (
            <div className="medicationContainer">
                <div className={`color ${item.color}`}></div>
                <h4>{item.name}</h4>
            </div>
        )
    })
}


const Settings = (props) => {
    const medicationRegistered = props;
    return (
        <div className="settings">
            <i className="fas fa-cog iconSettings" samesite="none"></i>
            <h2 className="settings_title">Settings</h2>
            <h3 className="settings_title">Medication Registered</h3>
            {renderMedicationRegistered(medicationRegistered)}
            {/* <Link to="/My-Health-Log/appointments">
                <Button nameButton="Back" classButton={`treatmentPage_button buttonAppointment`} />
            </Link> */}
        </div >
    )
}

export default Settings;