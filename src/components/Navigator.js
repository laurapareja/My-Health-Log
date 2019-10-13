import React from 'react';
import { Link } from "react-router-dom";

const Navigator = () => {
    return (
        <div className="navigator">
            <Link className="navigator_link" to="/My-Health-Log/"><i className="fas fa-home icon"></i>
                Home</Link>
            <Link className="navigator_link" to="/My-Health-Log/treatment"><i className="fas fa-pills icon"></i>Treatment</Link>
            <Link className="navigator_link" to="/My-Health-Log/appointments"><i className="fas fa-calendar-check icon"></i>Appointments</Link>
            <Link className="navigator_link" to="/My-Health-Log/calculator"><i className="fas fa-clock icon"></i>Timer</Link>
        </div>
    )
}

export default Navigator;