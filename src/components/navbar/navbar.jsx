import React, { Component } from "react";
import firebase from '../../config';
import "./navbar.css";
export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = { wattage: 0, current: 0, voltage: 0 };

  }
  componentDidMount() {
    firebase.database().ref("Sensor").on("value", snapshot => {
      let sensorData = [];
      snapshot.forEach(snap => {
        sensorData.push(snap.val());
      });
      this.setState({ sensorData: sensorData, wattage: sensorData[0] * sensorData[2], current: sensorData[0], voltage: sensorData[2] });
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div className="container">
          <p className="navbar-brand">Sun Tracker</p>
          <button
            className="navbar-toggler float-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbar9"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbar9">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <p className="nav-link">Wattage<br /><span className="values">{this.state.wattage} W</span></p>
                <p>0 Watts</p>
              </li>
              <li className="nav-item">
                <p className="nav-link">Current<br /><span className="values">{this.state.current} A</span></p>
              </li>
              <li className="nav-item">
                <p className="nav-link">Voltage<br /><span className="values">{this.state.voltage} V</span></p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};
