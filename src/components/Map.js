import React, {useState} from "react";
//import { useSelector } from "react-redux";
import {connect} from 'react-redux';
import rd3 from 'react-d3-library';
// import {legend} from "@d3/color-legend";
import {makeApiCallGetAllStates} from "../actions";
import us from './states-albers-10m.json';
import statesDensity from "./parkDensityData.json";
//import ImportedData from './unemployment201907.csv';
import * as d3 from "d3";
import { legend, geo } from "react-d3-library";
import * as topojson from "topojson-client";

var node = document.createElement('div');

// This is the D3 Geo Path Data Generator
// The null projection simply takes each coordinate in the data and converts it to a pixel coordinate with no transform - input values are treated as pixel values. 
const path = d3.geo.path().projection(null);

var color = d3.scale.quantize()
  // .domain[0, ])
  .range(["#dcdcdc", "#d0d6cd", "#bdc9be", "#aabdaf", "#97b0a0", "#84a491", "#719782", "#5e8b73", "#4b7e64", "#387255", "#256546", "#125937", "#004d28"]);
//var color = d3.scaleQuantize([1, 7], d3.schemeBlues[6]);
//var color = "#808080";
const format = d => `${d}%`;

const chart = (data) => {

  console.log("data in chart", data);
  // Constructs SVG Container with size of visualization
  const svg = d3.select(node).append("svg")
    .attr("viewBox", [0, 0, 975, 610]);

  // Creates Legend on SVG
  svg.append("g")
    .attr("transform", "translate(610,20)")
      // .append(() => legend({color, title: data.title, width: 260}));
  
  // Creates colored in states
  svg.append("g")
    .selectAll("path")  
    .data(topojson.feature(us, us.objects.states).features)
    .enter().append("path")
    .attr("fill", d => `${d.properties.name}`)
    //.attr("fill", d => color) // added
    .attr("d", path)
    .append("title")
      //.text(d => `${d.properties.name} ${format(data.get(d.properties.name))}`);
      .text(d => `${d.properties.name}`)

  // Creates Outline of states
  svg.append("path")
    .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-linejoin", "round")
    .attr("d", path);

  return node;
}

//--------------------------------------------------------------
const RD3Component = rd3.Component;

class MapComponent extends React.Component{

  constructor(props) {
    super(props);
    this.state = {d3: ''}
  }

  // getInitialState = () => {
  //   return {d3: ''}
  // }

  componentDidMount = () => {
    const {dispatch, states} = this.props;
    dispatch(makeApiCallGetAllStates())
    this.setState({d3: chart(states)});
    console.log("STATES:", states);
  }

  render() {
    const { error, isLoading } = this.props;
    if (error){
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
          <div>
            <RD3Component data={this.state.d3} />
          </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    states: state.states,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(MapComponent);