import React from "react";
import Header from "./Header";
import MedicationName from "./MedicationName";
import MedicationColorSelector from "./MedicationColorSelector";
import MedicationQuantitySelector from "./MedicationQuantitySelector";
import MedicationInstruction from "./MedicationInstruction";
import MedicationStartTiming from "./MedicationStartTiming";
// import PreviewExample from "./PreviewExample";
import ExampleGuideline from "./ExampleGuideline";
import Footer from "../Footer";
import "../stylesheets/App.scss"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayHours: [],
      dayHoursMedication: [],
      medicationName: "",
      firstDose: '',
      medicationInstruction: '',
      colorSelected: ""
    }
    this.getDays = this.getDays.bind(this);
    this.getHoursMedication = this.getHoursMedication.bind(this);
    this.getInfoState = this.getInfoState.bind(this);

  }
  componentDidMount() {
    this.getDays();
  }

  getDays() {
    let dayHoursList = [];
    for (let hour = 1; hour < 24; hour++) {
      dayHoursList.push(hour);
    }
    return this.setState({
      dayHours: dayHoursList
    })
  }
  getHoursMedication() {

    if (this.state.firstDose !== "" && this.state.medicationInstruction !== "") {
      console.log('sí tengo datos')

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
    })
  }


  render() {
    const timesMedication = this.getHoursMedication()
    return (
      <div>
        <div className="medicationCard">
          <Header />
          <MedicationName getInfoState={this.getInfoState} />
          <MedicationColorSelector getInfoState={this.getInfoState} />
          <MedicationQuantitySelector />
          <MedicationInstruction getInfoState={this.getInfoState} />
          <MedicationStartTiming getInfoState={this.getInfoState} />
          {/* <PreviewExample
          color={this.state.colorSelected}
          dayHours={this.state.dayHours}
          medicationName={this.state.medicationName}
          firstDose={this.state.firstDose} /> */}
          <ExampleGuideline
            info={timesMedication}
            color={this.state.colorSelected}
            medicationName={this.state.medicationName}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
