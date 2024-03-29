import React from 'react';
import { Link } from "react-router-dom";
import "../stylesheets/Navigator.scss"

const Navigator = () => {
    return (
        <div className="navigator">
            <Link className="navigator_link" to="/My-Health-Log/"><i className="fas fa-home icon" samesite="none"></i>
                Home</Link>
            <Link className="navigator_link" to="/My-Health-Log/treatment"><i className="fas fa-pills icon" samesite="none"></i>Treatment</Link>
            <Link className="navigator_link" to="/My-Health-Log/appointments"><i className="fas fa-calendar-check icon" samesite="none"></i>Appointments</Link>
            <Link className="navigator_link" to="/My-Health-Log/calculator"><i className="fas fa-clock icon" samesite="none"></i>Doses Calculator</Link>
            <Link className="navigator_link" to="/My-Health-Log/about"><i className="fas fa-user icon"></i>About</Link>
            {/* <Link className="navigator_link" to="/My-Health-Log/settings"><i className="fas fa-cog icon" samesite="none"></i>Settings</Link> */}
        </div>
    )
}

export default Navigator;