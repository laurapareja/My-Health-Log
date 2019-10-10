import React from "react";
// import Main from "./Main";
import Footer from "./Footer";
import "../stylesheets/App.scss"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flareTreatment: []
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
    const dataOrdered = data.map(month => {
      return month.treatment.sort((a, b) => { return new Date(b.date) - new Date(a.date) })
    })

    return this.setState({
      flareTreatment: dataOrdered
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
      <div className="main">
        <h1 className="main_title">Treatment</h1>
        <img src="../images/pills.png" alt="pill" className="pill_image"></img>

        {this.renderMonthName()}

        {/* <Main name={this.renderMonthName} /> */}
        < Footer />
      </div >
    );
  }
}

export default App;
