import React, { Component } from "react";
import { Line as LineChart } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Current",
      ill: true,
      background:
        "linear-gradient(180deg, rgba(238,7,7,1) 0%, rgba(255,111,111,0) 96%)",
      lineTension: 0.1,
      borderColor: "#22e0a4",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderWidth: 3,
      borderJoinStyle: "miter",
      pointBorderColor: "#22e0a4",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const lineChartOptions = {
  legend: {
    labels: {
      fontColor: "#b3bbc9",
      fontSize: 12
    }
  },
  datasetStrokeWidth: 3,
  pointDotStrokeWidth: 4,
  responsive: true,
  maintainAspectRatio: false,
  tooltips: {
    enabled: true,
  },
  title: {
    display: true,
    text: "Current",
    fontColor: "white",
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false,
          zeroLineColor: "transparent",
        },
        ticks: {
          fontColor: "#5F6E89",
          autoSkip: true,
          maxTicksLimit: 20,
          padding: 20,
          stepSize: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
          drawTicks: false,
        },
        display: true,
        ticks: {
          fontColor: "#5F6E89",
          autoSkip: true,
          maxTicksLimit: 5,
          padding: 20,
          // forces step size to be 5 units
          stepSize: 1,
        },
      },
    ],
  },
};
export default class Graph1 extends Component {
  render() {
    return (
      <div>
        <LineChart
          ref="chart"
          width={100}
          height={350}
          data={data}
          options={lineChartOptions}
        />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}
