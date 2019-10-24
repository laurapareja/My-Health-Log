import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Settings from './Settings';
import TreatmentPage from "./TreatmentPage";
import TreatmentPageList from "./TreatmentPageList";
import TreatmentRegister from "./TreatmentRegister";
import AppointmentPage from './AppointmentPage';
import AppointmentsList from "./AppointmentsList";
import MedicationCalculator from './MedicationCalculator/MedicationCalculator';
import Navigator from './Navigator';
import Footer from './Footer';

import "../stylesheets/App.scss"

class App extends React.Component {
  constructor(props) {
    super(props);
    const localStorageData = this.getData();
    this.state = localStorageData === null
      ? {
        flareTreatment: [],
        colorSelected: '',
        medicationRegistered: [
          {
            "name": "paracetamol",
            "color": "blue"
          }, {
            "name": "ibuprofeno",
            "color": "yellow"
          }]
      }
      : localStorageData;

    this.saveData = this.saveData.bind(this);
    this.actionColorSelector = this.actionColorSelector.bind(this);
    this.includeNewTreatment = this.includeNewTreatment.bind(this);
  }
  componentDidMount() {
    this.getData();
    this.saveData();
  }
  getData() {
    return JSON.parse(localStorage.getItem("infoMyHealthRegister"));
  }
  saveData() {
    localStorage.setItem("infoMyHealthRegister", JSON.stringify(this.state));
  }

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

      const listMedications = this.state.medicationRegistered.map(medication => {
        return medication.name
      })
      if (listMedications.find(medication => {
        return medication === medicationName
      }) === undefined) {
        const listMedication = [...this.state.medicationRegistered]
        const object = { "name": medicationName, "color": "yellow" }



        listMedication.push(object)
        return this.setState({
          medicationRegistered: listMedication
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
      };

      const listUpdated = [...this.state.flareTreatment]
      listUpdated.push(newTreatment)

      return this.setState({
        flareTreatment: listUpdated
      }, this.saveData
      )
    }
  }
  render() {
    return (
      <div className="body" >
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
              path="/My-Health-Log/settings"
              render={() => {
                return <Settings
                  medicationRegistered={this.state.medicationRegistered}
                />;
              }}
            />
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
                  medicationName={this.state.medicationRegistered}
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
                  medicationName={this.state.medicationRegistered}
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
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
