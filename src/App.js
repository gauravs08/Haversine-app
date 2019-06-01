import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Point1: "",
      Point2: "",
      calculatedDistance: "",
      errors: {}
    };

    this.handleChangeFrom = this.handleChangeFrom.bind(this);
    this.handleChangeTo = this.handleChangeTo.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValidation() {
    let errors = {};
    let formIsValid = true;

    if (!this.state.Point1) {
      formIsValid = false;
      errors["Point1"] = "Cannot be empty";
    }

    if (!this.state.Point2) {
      formIsValid = false;
      errors["Point2"] = "Cannot be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChangeFrom(event) {
    this.setState({ Point1: event.target.value });
  }

  handleChangeTo(event) {
    this.setState({ Point2: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.handleValidation()) {
      const [latitute1, longitude1] = this.state.Point1.split(",");
      const [latitute2, longitude2] = this.state.Point2.split(",");

      let data = {
        lat1: latitute1,
        lat2: latitute2,
        long1: longitude1,
        long2: longitude2
      };

      fetch(`/api/calculateDistance`, {
        method: "post",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({
            calculatedDistance: json.calDist
          });
        });
    }
  }

  render() {
    return (
      <div className="App-home">
        <header>
          <form onSubmit={this.handleSubmit}>
            <div className="App">
              <p> Distance Between Two Points </p>
            </div>
            <div className="App-input">
              <label>From: </label>
              <input
                id="Point1"
                type="text"
                value={this.state.Point1}
                onChange={this.handleChangeFrom}
                placeholder="latitude, longitude"
                className="input"
              />
              <span className="error">{this.state.errors["Point1"]}</span>
            </div>

            <div className="App-input">
              <label>To: </label>
              <input
                id="Point2"
                type="text"
                value={this.state.Point2}
                onChange={this.handleChangeTo}
                placeholder="latitude, longitude"
                className="input"
              />
              <span className="error">{this.state.errors["Point2"]}</span>
            </div>
            <div className="App">
              <button type="submit" className="App-button">
                Calculate Distance
              </button>
            </div>
            <div className="App">
              <p>Calculated Distance is : {this.state.calculatedDistance} Km</p>
            </div>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
