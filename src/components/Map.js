import React from "react";
import { useSelector } from "react-redux";
import rd3 from 'react-d3-library';
import {legend} from "@d3/color-legend";
import {makeApiCallGetAllStates} from "../actions";
import statesAlbersJson from './states-albers-10m.json';
import unemploymentData from './unemployment201907.csv';
// const RD3Component = rd3.Component;

function Map(){

  var d3 = require("d3@5");
  var topojson = require("topojson-client@3");
  var us = FileAttachment(statesAlbersJson).json(); //from observable standard library? https://github.com/observablehq/stdlib
  format = d => `${d}%`;
  var path = d3.geoPath();
  var color = d3.scaleQuantize([1, 7], d3.schemeBlues[6]);

  var node = document.createElement('div');

  //useSelector(states, setStates) = [];
  
  function chart() {
    const svg = d3.select(node).create("svg")
        .attr("viewBox", [0, 0, 975, 610]);
  
    svg.append("g")
        .attr("transform", "translate(610,20)")
        .append(() => legend({color, title: data.title, width: 260}));
  
    svg.append("g")
      .selectAll("path")
      .data(topojson.feature(us, us.objects.states).features)
      .join("path")
        .attr("fill", d => color(data.get(d.properties.name)))
        .attr("d", path)
      .append("title")
        .text(d => `${d.properties.name}
  ${format(data.get(d.properties.name))}`);
  
    svg.append("path")
        .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-linejoin", "round")
        .attr("d", path);
  
    return svg.node();
  }

  // var data = Map(51) {
  //   "Vermont" => 2.1
  //   "North Dakota" => 2.4
  //   "Iowa" => 2.5
  //   "New Hampshire" => 2.5
  //   "Hawaii" => 2.8
  //   "Utah" => 2.8
  //   "Colorado" => 2.9
  //   "Idaho" => 2.9
  //   "Massachusetts" => 2.9
  //   "South Dakota" => 2.9
  //   "Virginia" => 2.9
  //   "Maine" => 3
  //   "Wisconsin" => 3
  //   "Nebraska" => 3.1
  //   "Oklahoma" => 3.2
  //   "Alabama" => 3.3
  //   "Delaware" => 3.3
  //   "Florida" => 3.3
  //   "Kansas" => 3.3
  //   "Missouri" => 3.3
  //   "New Jersey" => 3.3
  //   "Arkansas" => 3.4
  //   "Indiana" => 3.4
  //   "Minnesota" => 3.4
  //   "Montana" => 3.4
  //   "South Carolina" => 3.4
  //   "Texas" => 3.4
  //   "Rhode Island" => 3.5
  //   "Tennessee" => 3.5
  //   "Connecticut" => 3.6
  //   "Georgia" => 3.6
  //   "Wyoming" => 3.6
  //   "Maryland" => 3.8
  //   "Pennsylvania" => 3.9
  //   "New York" => 4
  //   "Ohio" => 4
  //   "Oregon" => 4
  //   "California" => 4.1
  //   "Nevada" => 4.1
  //   "Illinois" => 4.2
  //   "North Carolina" => 4.2
  //   "Kentucky" => 4.3
  //   "Louisiana" => 4.3
  //   "Michigan" => 4.3
  //   "Washington" => 4.6
  //   "West Virginia" => 4.7
  //   "Arizona" => 4.9
  //   "New Mexico" => 4.9
  //   "Mississippi" => 5.1
  //   "District of Columbia" => 5.6
  //   "Alaska" => 6.3
  //   title: "Unemployment rate (%)"
  //   <prototype>: Map {Symbol(Symbol.toStringTag): "Map", Symbol(Symbol.iterator): ƒ()}
  //   };

  

  return (
    <div>
      {/* <img src={chart()} /> */}
    </div>
  )
}

export default Map;