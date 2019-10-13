import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TreatmentPage from "./TreatmentPage";
import Appointments from './Appointments';
import MedicationCalculator from './MedicationCalculator/MedicationCalculator';
import Navigator from './Navigator';

import "../stylesheets/App.scss"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flareTreatment: [],
    }
    this.getFlareTreatmentInfo = this.getFlareTreatmentInfo.bind(this);
    this.includeDayTreatmentToData = this.includeDayTreatmentToData.bind(this);
    this.includeDataOrderedToState = this.includeDataOrderedToState.bind(this);
  }
  componentDidMount() {
    this.getFlareTreatmentInfo();
  }

  getFlareTreatmentInfo() {
    fetch("https://laurapareja.github.io/My-Health-Log/services/info.json")
      // fetch("http://localhost:3000/services/info.json")

      .then(response => response.json())
      .then(data => {
        this.includeDayTreatmentToData(data);
        this.includeDataOrderedToState(data);
      })
  }

  includeDayTreatmentToData(data) {
    data[0].treatment.push(
      {
        "date": "2019-06-16",
        "treatment": [
          {
            "time": "08:00",
            "pill": "paracetamol"
          },
          {
            "time": "12:45",
            "pill": "ibuprofeno"
          }, {
            "time": "18:45",
            "pill": "paracetamol"
          }
        ]
      }
    )
    return data;
  }

  includeDataOrderedToState(data) {
    const monthOrdered = data.sort((a, b) => {
      return new Date(b.name) - new Date(a.name)
    });

    const propertiesOrdered = data.map(month => {
      return month.treatment.sort((a, b) => { return new Date(b.date) - new Date(a.date) })
    })

    return this.setState({
      flareTreatment: propertiesOrdered,
    })
  }

  render() {
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
                  flareTreatment={this.state.flareTreatment}
                  titlePage="Treatment"
                  classImage="page_image"
                  image="https://laurapareja.github.io/My-Health-Log/images/pills.png" />;
              }}
            />
            <Route
              exact
              path="/My-Health-Log/appointments"
              render={() => {
                return <Appointments
                  titlePage="Appointments"
                  classImage="page_image"
                  image="https://laurapareja.github.io/My-Health-Log/images/doctorDates.png" />;
              }}
            />
            <Route
              exact
              path="/My-Health-Log/calculator"
              render={() => {
                return <MedicationCalculator />;
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
