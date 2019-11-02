import React from "react";
import Header from "./Header";
import MedicationName from "./MedicationName";
import MedicationColorSelector from "./MedicationColorSelector";
// import MedicationQuantitySelector from "./MedicationQuantitySelector";
import MedicationInstruction from "./MedicationInstruction";
import MedicationStartTiming from "./MedicationStartTiming";
import ExampleGuideline from "./ExampleGuideline";
import "../../stylesheets/MedicationCalculator.scss";


class App extends React.Component {
  constructor(props) {
    super(props);
    const localStorageData = this.getData();
    this.state = localStorageData === null
      ? this._getInitialState()
      : localStorageData;

    this.saveData = this.saveData.bind(this);

    this.getDays = this.getDays.bind(this);
    this.getHoursMedication = this.getHoursMedication.bind(this);
    this.getInfoState = this.getInfoState.bind(this);

  }
  componentDidMount() {
    this.getDays();
    this.saveData();

  }
  //obtengo los datos del localstorage
  getData() {
    return JSON.parse(localStorage.getItem("infoMedication"));
  }
  //guardo los datos en el localstorage
  saveData() {
    localStorage.setItem("infoMedication", JSON.stringify(this.state));
  }


  _getInitialState() {
    return {
      dayHours: [],
      dayHoursMedication: [],
      medicationName: "",
      firstDose: '',
      medicationInstruction: '',
      colorSelected: ""
    }
  }

  getDays() {
    let dayHoursList = [];
    for (let hour = 1; hour < 24; hour++) {
      dayHoursList.push(hour);
    }
    return this.setState({
      dayHours: dayHoursList
    },
      //guardo en localstorage
      this.saveData
    )
  }
  getHoursMedication() {

    if (this.state.firstDose !== "" && this.state.medicationInstruction !== "") {
      const firstDose = parseInt(this.state.firstDose);
      const medicationInstruction = parseInt(this.state.medicationInstruction);
      const doses = 24 / medicationInstruction;

      let numberOfDoses = [];

      for (let dose = 0; dose < doses; dose++) {
        numberOfDoses.push(dose)
      }

      let hoursNeed = firstDose;
      let listTimes = []

      numberOfDoses.forEach((user) => {
        if (user === 0) {
          listTimes.push(hoursNeed)

        } else {
          const time = hoursNeed += medicationInstruction
          if (time > 24) {
            const goodTime = time - 24;
            listTimes.push(goodTime)

          } else {
            listTimes.push(time)

          }
        }
      })

      return listTimes
    }
  }

  getInfoState(event, infoState) {
    this.setState({
      [infoState]: event.currentTarget.value
    },
      //guardo en localstorage
      this.saveData
    )
  }


  render() {
    const image = this.props.image;
    const timesMedication = this.getHoursMedication()
    const color = this.state.colorSelected;
    const medicationName = this.state.medicationName;
    this.props.actionColorSelector(color, medicationName);
    if (this.state === null) {
      return <p>Loading</p>
    }
    return (
      <div className="mainCalculator">
        <Header image={image} />
        <div className="mainCalculator_content">
          <div className="mainCalculator_inputsContainer">
            <MedicationName getInfoState={this.getInfoState} medicationName={this.state.medicationName} />
            <MedicationColorSelector getInfoState={this.getInfoState} colorSelected={this.state.colorSelected} />
            {/* <MedicationQuantitySelector /> */}
            <MedicationStartTiming getInfoState={this.getInfoState} firstDose={this.state.firstDose} />
            <MedicationInstruction getInfoState={this.getInfoState} medicationInstruction={this.state.medicationInstruction} />

          </div>

          <ExampleGuideline
            info={timesMedication}
            color={this.state.colorSelected}
            medicationName={this.state.medicationName}
          />
        </div>
      </div>
    );
  }
}

export default App;
