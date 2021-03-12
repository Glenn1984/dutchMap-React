import './styles/App.css';
import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import obtainedData from "./data/obtainedData.json";
import restrictionData from "./data/restrictionData.json";
import mapDataNL from "./components/Map";

require("highcharts/modules/map")(Highcharts);


const obtData = obtainedData.map(dataItem => [`${dataItem.name}`, dataItem.value]);


const mapOptions = {
  chart: {
    backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
            [0, '#cddee4'],
            [1, '#4b96af'],
        ]
    },
  },

  title: {
    text: 'The Netherlands in React',
  },

  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: "bottom",
    },
  },

  colorAxis: {
    dataClasses: restrictionData,
  },

  series: [{
    mapData: mapDataNL,
    data: obtData,
    name: "provinces of the netherlands",
    states: {
      hover: {
        color: "rgb(255, 255, 0)",
      },
    },
  }],
};

const App = () => (
  <>
    <HighchartsReact
      options={mapOptions}
      highcharts={Highcharts}
      constructorType={"mapChart"}
    />
  </>
);

export default App;