import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TreatmentPage from "./TreatmentPage";
import TreatmentPageList from "./TreatmentPageList";
import TreatmentRegister from "./TreatmentRegister";
import AppointmentPage from './AppointmentPage';
import AppointmentsList from "./AppointmentsList";
import MedicationCalculator from './MedicationCalculator/MedicationCalculator';
import Navigator from './Navigator';

import "../stylesheets/App.scss"

class App extends React.Component {
  constructor(props) {
    super(props);
    const localStorageData = this.getData();
    this.state = localStorageData === null
      ? this._getInitialState()
      : localStorageData;

    this.saveData = this.saveData.bind(this);
    // this.getFlareTreatmentInfo = this.getFlareTreatmentInfo.bind(this);
    // this.includeDayTreatmentToData = this.includeDayTreatmentToData.bind(this);
    // this.includeDataOrderedToState = this.includeDataOrderedToState.bind(this);
    this.actionColorSelector = this.actionColorSelector.bind(this);
    this.includeNewTreatment = this.includeNewTreatment.bind(this);
  }
  componentDidMount() {
    this.getData();
    this.saveData();
  }
  //obtengo los datos del localstorage
  getData() {
    return JSON.parse(localStorage.getItem("infoMyHealthRegister"));
  }
  //guardo los datos en el localstorage
  saveData() {
    localStorage.setItem("infoMyHeinfoMyHealthRegister", JSON.stringify(this.state));
  }
  _getInitialState() {
    return {
      flareTreatment: [],
      colorSelected: '',
      medicationName: ["paracetamol", "ibuprofeno"]
    }
  }

  // getFlareTreatmentInfo() {
  //   fetch("https://laurapareja.github.io/My-Health-Log/services/info.json")
  //     // fetch("http://localhost:3000/services/info.json")

  //     .then(response => response.json())
  //     .then(data => {
  //       this.includeDayTreatmentToData(data);
  //       this.includeDataOrderedToState(data);
  //     })
  // }

  // includeDayTreatmentToData(data) {
  //   data[0].treatment.push(
  //     {
  //       "date": "2019-06-16",
  //       "treatment": [
  //         {
  //           "time": "08:00",
  //           "pill": "paracetamol"
  //         },
  //         {
  //           "time": "12:45",
  //           "pill": "ibuprofeno"
  //         }, {
  //           "time": "18:45",
  //           "pill": "paracetamol"
  //         }
  //       ]
  //     }
  //   )
  //   return data;
  // }

  // includeDataOrderedToState(data) {
  //   const monthOrdered = data.sort((a, b) => {
  //     return new Date(b.name) - new Date(a.name)
  //   });
  //   const propertiesOrdered = monthOrdered.map(month => {
  //     return month.treatment.sort((a, b) => { return new Date(b.date) - new Date(a.date) })
  //   })

  //   return this.setState({
  //     flareTreatment: propertiesOrdered,
  //   },
  //     //guardo en localstorage
  //     this.saveData
  //   )
  // }
  actionColorSelector(color, namePill) {
    if (this.state.colorSelected !== color) {
      this.setState({
        colorSelected: color,
      }, this.saveData
      )
    }
    const pill = namePill.toLowerCase()
    if (this.state.medicationName !== pill) {
      this.setState({
        medicationName: pill,
      }, this.saveData
      )
    }
  }
  includeNewTreatment(newState) {
    return (e) => {
      const date = newState.date;
      const time = newState.time;
      const medicationName = newState.medicationName;

      if (this.state.medicationName.includes(medicationName) === false) {
        const listMedication = [...this.state.medicationName]
        listMedication.push(medicationName)
        return this.setState({
          medicationName: listMedication
        }, this.saveData
        )
      }

      const newTreatment =
      {
        "date": date,
        "treatment": [
          {
            "time": time,
            "pill": medicationName
          }
        ]
      }
        ;
      const listUpdated = [...this.state.flareTreatment]
      listUpdated.push(newTreatment)

      return this.setState({
        flareTreatment: listUpdated
      }, this.saveData
      )
    }
  }
  render() {
    console.log(this.state)
    return (
      <div className="body">
        <BrowserRouter>
          <Route
            exact
            path="/My-Health-Log/"
            render={() => {
              return <HomePage />;
            }}
          />
          <Switch>
            <Route
              exact
              path="/My-Health-Log/treatment"
              render={() => {
                return <TreatmentPage
                  titlePage="Treatment"
                  classImage="page_image"
                  image="https://laurapareja.github.io/My-Health-Log/images/pills.png" />;
              }}
            />
            <Route
              exact
              path="/My-Health-Log/treatmentList"
              render={() => {
                return <TreatmentPageList
                  flareTreatment={this.state.flareTreatment}
                  titlePage="Treatment"
                  classImage="page_image"
                  colorSelected={this.state.colorSelected}
                  medicationName={this.state.medicationName}
                  image="https://laurapareja.github.io/My-Health-Log/images/pills.png" />;
              }}
            />
            <Route
              exact
              path="/My-Health-Log/treatment/register"
              render={() => {
                return <TreatmentRegister
                  titlePage="Treatment"
                  classImage="page_image"
                  includeNewTreatment={this.includeNewTreatment}
                  medicationsTreatment={this.state.medicationName}
                  image="https://laurapareja.github.io/My-Health-Log/images/pills.png" />;
                ;
              }}
            />
            <Route
              exact
              path="/My-Health-Log/appointments"
              render={() => {
                return <AppointmentPage
                  titlePage="Appointments"
                  classImage="page_image"
                  image="https://laurapareja.github.io/My-Health-Log/images/doctorDates.png" />;
              }}
            />
            <Route
              exact
              path="/My-Health-Log/appointmentsList"
              render={() => {
                return <AppointmentsList
                  titlePage="Appointments"
                  classImage="page_image"
                  image="https://laurapareja.github.io/My-Health-Log/images/doctorDates.png" />;
              }}
            />
            <Route
              exact
              path="/My-Health-Log/calculator"
              render={() => {
                return <MedicationCalculator actionColorSelector={this.actionColorSelector} />;
              }}
            />
          </Switch>
          <Navigator />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
