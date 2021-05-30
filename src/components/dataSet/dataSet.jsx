import React from "react";
import "./dataSet.css";
import Graph1 from "../graphs/graph1.jsx";
import Graph2 from "../graphs/graph2.jsx";
import Graph3 from "../graphs/graph3.jsx";
import Graph4 from "../graphs/graph4.jsx";
import Graph5 from "../graphs/graph5.jsx";
import temperatureImage from "../static/temperature.png"
import luminosityImage from "../static/luminosity.png"

const DataSet = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="box-1 col-12 offset-md-1 col-md-4 my-4">
          <h1 className="wattageIcon">W</h1>
          <Graph1 className="Graph1"></Graph1>
        </div>
        <div className="box-2 col-12  offset-md-2 col-md-4 my-4">
          <h1 className="currentIcon">I</h1>
          <Graph2 className="Graph2"></Graph2>
        </div>
        <div className="box-2 col-12 offset-md-1 col-md-4 my-4">
          <img src={luminosityImage} className="lumiImg" />
          <Graph4 className="Graph4"></Graph4>
        </div>
        <div className="box-2 col-12 offset-md-2 col-md-4 my-4">
          <h1 className="voltageIcon">V</h1>
          <Graph5 className="Graph5"></Graph5>
        </div>
        <div className="box-2 col-12 offset-md-4 col-md-4 my-4">
          <img src={temperatureImage} className="tempImg" />
          <Graph3 className="Graph3"></Graph3>
        </div>
      </div>
    </div>
  );
};
export default DataSet;
