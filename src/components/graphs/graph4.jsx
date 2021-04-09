import React, { Component } from "react";
import { Doughnut as LineChart } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
const data = {
    labels: [
        "Luminosity"
    ],
    datasets: [
        {
            data: [65, 35],
            backgroundColor: [
                "#ffbf0f",
                "#1c202c"
            ],
            hoverBackgroundColor: [
                "#ffbf0f",
                "#1c202c"
            ],
            borderWidth: [
                0, 0
            ],
        }]
};

const lineChartOptions = {
    cutoutPercentage: 70,
    legend: {
        labels: {
            fontColor: "#b3bbc9",
            fontSize: 12
        }
    },
    animation: {
        animationRotate: true,
        duration: 2000
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
        text: "Luminosity",
        fontColor: "white",
    },
};
export default class Graph4 extends Component {
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
