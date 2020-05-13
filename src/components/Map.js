import React, {useState} from "react";
import {connect} from 'react-redux';
import rd3 from 'react-d3-library';
import {makeApiCallGetAllStates} from "../actions";
import us from './states-albers-10m.json';
import statesDensity from "./parkDensityData.json";
import * as d3 from "d3";
import { geo } from "react-d3-library";
import * as topojson from "topojson-client";

// For React D3 components, they must be added to a div then pass div
var node = document.createElement('div');

// This is the D3 Geo Path Data Generator
// The null projection simply takes each coordinate in the data and converts it to a pixel coordinate with no transform - input values are treated as pixel values. 
const path = d3.geo.path().projection(null);

// Threshold breakpoints and colors for filling in states defined here
// const legendLabels = ["0", "1+", "5+", "10+", "15+", "25+", "30+", "40+", "50+", "75+", "100+"];
// const colorDomain = [0, 1, 5, 10, 15, 25, 30, 40, 50, 75, 100];
const colorDomain = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const legendLabels = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];
var color = d3.scale.threshold()
  .domain(colorDomain)
  .range(["#5E4FA2", "#3288BD", "#66C2A5", "#ABDDA4", "#E6F598", 
    "#FFFFBF", "#FEE08B", "#FDAE61", "#F46D43", "#D53E4F", "#9E0142"]);

const format = d => `${d}%`;


const chart = (data) => {

  console.log("data in chart", data);
  // Constructs SVG Container with size of visualization
  const svg = d3.select(node).append("svg")
    .attr("viewBox", [0, 0, 975, 700]);

  // Creates Legend on SVG
  var legend_title = "Park Density"
  var ls_w = 85, ls_h = 20, width = 960;

  var legend = svg.selectAll("g.legend")
    .data(colorDomain)
    .enter().append("g")
    .attr("class", "legend");

  legend.append("text")
    .attr("x", 850)
    .attr("y", 620)
    .attr("class", "legend_title")
    .text(function () { return legend_title});

  legend.append("rect")
    .attr("x", function (d, i) { return 15 + (i * ls_w); })
    // .attr("x", function (d, i) { return width - (i * ls_w) - ls_w; })
    .attr("y", 650)
    .attr("width", ls_w)
    .attr("height", ls_h)
    .style("fill", function (d, i) { return color(d); })
    .style("opacity", 0.8);

  legend.append("text")
    .attr("x", function (d, i) { return 15 + (i * ls_w); })
    // .attr("x", function (d, i) { return width - (i * ls_w) - ls_w;})
    .attr("y", 640)
    .text(function (d, i) { return legendLabels[i];});
  
  // Creates colored in states
  svg.append("g")
    .selectAll("path")  
    .data(topojson.feature(us, us.objects.states).features)
    .enter().append("path")
    .attr("fill", function(d){
      let number_parks;
      data.forEach(state => {
        if (state.name === d.properties.name){
          number_parks = state.numberParks;
        }
      });
      return color(number_parks);
    })
    .attr("d", path)
    .append("title")
  //     .text(d => `${d.properties.name}, ${states.get(d.id.slice(0, 2)).name}
  // ${format(data.get(d.id))}`);
      .text((d) => {
        let number_parks;
        data.forEach(state => {
          if (state.name === d.properties.name){
            number_parks = state.numberParks;
          }
        });
        return `${d.properties.name}`;
      })

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
    this.setState({d3: chart(this.props.states)});
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