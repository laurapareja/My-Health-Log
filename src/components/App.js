import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'; import TreatmentPage from "./TreatmentPage";
import Header from "./Header";
import HomePage from './HomePage';
import Appointments from './Appointments'
import Footer from "./Footer";
import { Link } from "react-router-dom";

import "../stylesheets/App.scss"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flareTreatment: [],
    }
    this.getFlareTreatmentInfo = this.getFlareTreatmentInfo.bind(this);
    this.includeObjectToData = this.includeObjectToData.bind(this);
    this.renderMonthName = this.renderMonthName.bind(this);
  }
  componentDidMount() {
    this.getFlareTreatmentInfo();

  }

  getFlareTreatmentInfo() {

    fetch("./services/info.json")
      .then(response => response.json())
      .then(data => {
        this.includeObjectToData(data);
      })
  }

  includeObjectToData(data) {
    data[0].treatment.push(
      {
        "date": "2019-06-16",
        "treatment": [
          {
            "time": "04:00",
            "pill": "paracetamol"
          },
          {
            "time": "10:45",
            "pill": "ibuprofeno"
          }, {
            "time": "18:45",
            "pill": "ibuprofeno"
          }
        ]
      }
    )
    const monthOrdered = data.sort((a, b) => {
      return new Date(b.name) - new Date(a.name)
    });
    const treatmentOrdered = data.map(month => {
      return month.treatment.map(item => {
        const medicationList = item.treatment
        return medicationList.sort((a, b) => { return new Date(b.time) - new Date(a.time) })
      })
    })
    const propertiesOrdered = data.map(month => {
      return month.treatment.sort((a, b) => { return new Date(b.date) - new Date(a.date) })
    })

    return this.setState({
      flareTreatment: propertiesOrdered,
    })
  }


  renderMonthName() {
    return this.state.flareTreatment.map(month => {
      const list = month.map(day => {

        const dayList = day.treatment.map((dose, index) => {
          return (
            <div className="medication_dose--container">
              <h4 key={index}>{dose.time} </h4>
              <p>{dose.pill}</p>
            </div>
          )
        })
        return <div className="medication_dose--day">
          ----- {day.date}-----
          {dayList}
        </div>
      })
      return list
    })

  }


  render() {
    console.log(this.state.flareTreatment)


    return (
      <div>
        <BrowserRouter>
          < Header />
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
                return <TreatmentPage renderMonthName={this.renderMonthName()} titlePage="Treatment" classImage="pill_image" image="https://laurapareja.github.io/My-Health-Log/images/pills.png" />;
              }}
            />
            <Route
              exact
              path="/My-Health-Log/appointments"
              render={() => {
                return <Appointments titlePage="Appointments" classImage="pill_image" image="https://laurapareja.github.io/My-Health-Log/images/doctorDates.png" />;
              }}
            />
          </Switch>
          < Footer />
          <div className="navigator">
            <Link className="navigator_link" to="/My-Health-Log/"><i class="fas fa-home icon"></i>
              Home</Link>
            <Link className="navigator_link" to="/My-Health-Log/treatment"><i class="fas fa-pills icon"></i>Treatment</Link>
            <Link className="navigator_link" to="/My-Health-Log/appointments"><i class="fas fa-calendar-check icon"></i>Appointments</Link>
          </div>

        </BrowserRouter>

      </div>
    );
  }
}

export default App;
