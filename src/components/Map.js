import React from "react";
// import { useSelector } from "react-redux";
import rd3 from 'react-d3-library';
// import {legend} from "@d3/color-legend";
// import {makeApiCallGetAllStates} from "../actions";
import statesAlbersJson from './states-albers-10m.json';
import data from './unemployment201907.csv';
import * as d3 from "d3";
import { legend, geo } from "react-d3-library";
import * as topojson from "topojson-client";

var node = document.createElement('div');

//var width = 960, height = 500;

//   var d3 = require("d3@5");
//var topojson = require("topojson-client@3");
//var us = FileAttachment(statesAlbersJson).json(); //from observable standard library? https://github.com/observablehq/stdlib
var us = statesAlbersJson;
//var data = 
//   format = d => `${d}%`;

// This is the D3 Geo Path Data Generator
const path = d3.geo.path();

//var color = d3.scaleQuantize([1, 7], d3.schemeBlues[6]);

const chart = () => {
  // Constructs SVG Container with size of visualization
  const svg = d3.select(node).append("svg")
      .attr("viewBox", [0, 0, 975, 610]);

  svg.append("g")
      .attr("transform", "translate(610,20)")
      //.append(() => legend({color, title: data.title, width: 260}));

  svg.append("g")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.states).features)
    .join("path")
      //.attr("fill", d => color(data.get(d.properties.name)))
      .attr("fill", d => "#000000") // added
      .attr("d", path)
    // .append("title")
    //   .text(d => `${d.properties.name}
    //   ${format(data.get(d.properties.name))}`);

  svg.append("path")
      .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("d", path);

  return svg.node();
}

//--------------------------------------------------------------
const RD3Component = rd3.Component;

class Map extends React.Component{

  constructor(props) {
    super(props);
    this.state = {d3: ''}
  }

  getInitialState = () => {
    return {d3: ''}
  }

  componentDidMount = () => {
    this.setState({d3: node});
  }

  render() {
    return (
        <div>
          <RD3Component data={this.state.d3} />
        </div>
    )
  }
}

export default Map;