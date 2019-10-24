import React from 'react';
import Footer from './Footer';
import "../stylesheets/TreatmentRegister.scss"
import Button from './Button';
import { Link } from "react-router-dom";


class TreatmentRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newMedication: false,
            date: "",
            time: "",
            medicationName: "",
            buttonClickable: true,
            errorMessage: true,
        }
        this.renderMedicationSelector = this.renderMedicationSelector.bind(this);
        this.handleNewMedication = this.handleNewMedication.bind(this);
        this.regirterNewMedication = this.regirterNewMedication.bind(this);
        this.handleDeleteNewMedication = this.handleDeleteNewMedication.bind(this);
        this.handleSaveMedication = this.handleSaveMedication.bind(this);
        this.handleClassButton = this.handleClassButton.bind(this);
        this.renderErrorMessage = this.renderErrorMessage.bind(this);
        this.actionSaveButton = this.actionSaveButton.bind(this);
        this.renderNewMedicationName = this.renderNewMedicationName.bind(this);
    }


    renderMedicationSelector(medicationsTreatment) {
        if (medicationsTreatment !== "") {
            return medicationsTreatment.map((medication, index) => {
                return <option key={index} name={medication.name} value={medication.name}>{medication.name}</option>
            })
        }

    }
    handleNewMedication(event) {
        if (event.currentTarget.value === 'newMedication') {
            return this.setState({
                newMedication: true,
            })
        }
    }
    renderNewMedicationName(event) {
        return this.setState({
            medicationName: event.currentTarget.value,
        })
    }

    regirterNewMedication() {
        if (this.state.newMedication === true) {
            return (
                <div>
                    <div className="inputMedicationTreatment_container ">
                        <label htmlFor="medicationTreatment" className="treatmentLabel">Register new medication</label >
                        <div className="inputContainerMedication">

                            <input type="text" id="medicationTreatment" className="inputTreatment" onChange={this.renderNewMedicationName}></input>
                            <i className="far fa-trash-alt iconInput iconInput_trash" onClick={this.handleDeleteNewMedication}></i>
                        </div>

                    </div>
                </div>)
        }
    }
    handleSaveMedication(event) {
        if (event.target.type === "date") {
            let today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const yyyy = today.getFullYear();

            today = yyyy + '-' + mm + '-' + dd;

            if (event.target.value <= today) {
                this.setState({
                    date: event.target.value,
                })
            } else {
                alert('future dates are not available')
                event.target.value = "";
            }

        } else if (event.target.type === "time") {
            this.setState({
                time: event.target.value,
            })
        } else {
            this.setState({
                medicationName: event.target.value,
                errorMessage: false,
                buttonClickable: false
            })
        }
    }

    handleClassButton() {
        if (this.state.date === "" || this.state.date === undefined || this.state.time === "" || this.state.medicationName === "") {
            return "treatmentRegister_button--disable"
        } else {
            return "treatmentRegister_button--able"
        }
    }

    renderErrorMessage() {
        if (this.state.errorMessage === true) {
            return <div>Please complete all options</div>
        }
    }

    handleDeleteNewMedication() {
        this.setState({
            newMedication: false
        })
    }

    actionSaveButton(includeNewTreatment, state) {
        if (this.state.buttonClickable === false) {
            return includeNewTreatment(state)
        }
    }

    render() {
        const {
            props,
        } = this;

        const { image, classImage, medicationName, includeNewTreatment } = props

        return (
            <div className="main" >
                <img src={image} alt="pill" className={`treatmentPageListImp ${classImage}`}></img>
                <h2 className="main_title">New Treatment</h2>
                <form className="form" onChange={this.handleSaveMedication}>
                    <div className="inputDateTreatment_container">
                        <label htmlFor="dateTreatment" className="treatmentLabel">Date</label >
                        <div className="inputContainer">
                            <i className="far fa-calendar-plus iconInput"></i>
                            <input type="date" id="dateTreatment" className="inputTreatment" ></input>
                        </div>
                    </div>
                    <div className="inputDateTreatment_container">
                        <label htmlFor="timeTreatment" className="treatmentLabel">Time</label>
                        <div className="inputContainer">
                            <i className="far fa-clock iconInput"></i>
                            <input type="time" id="timeTreatment" className="inputTreatment inputTreatment_Time" ></input>
                        </div>
                    </div>
                    <div className="inputDateTreatment_container">
                        <label htmlFor="selectMedication" className="treatmentLabel">Medication</label>
                        <div className="inputContainer">
                            <i className="fas fa-tablets iconInput"></i>
                            <select name="selectMedication" id="selectMedication" className="inputTreatment" onChange={this.handleNewMedication} >
                                <option name="" value=""></option>
                                {this.renderMedicationSelector(medicationName)}
                                <option name="newMedication" value="newMedication">new medication</option>
                            </select>
                        </div>
                    </div>
                    {this.regirterNewMedication()}
                </form>

                {this.renderErrorMessage()}
                <Link to="/My-Health-Log/treatment">
                    <Button
                        nameButton="Save"
                        classButton={this.handleClassButton()}
                        actionButton={this.actionSaveButton(includeNewTreatment, this.state)}
                        disabled={this.state.buttonClickable} />
                </Link>

                <Link to="/My-Health-Log/treatment">
                    <Button nameButton="Back" classButton="treatmentPage_button" />
                </Link>
                <Footer />
            </div>
        )
    }
}

export default TreatmentRegister;