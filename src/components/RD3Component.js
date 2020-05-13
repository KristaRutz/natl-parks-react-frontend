import d3 from 'd3';
import React from 'react';
import rd3 from 'react-d3-library';

var node = document.createElement('div');

var width = 960,
    height = 500;

var svg = d3.select(node).append("svg")
    .attr("width", width)
    .attr("height", height);

var defs = svg.append("defs");

 defs.append("clipPath")
    .attr("id", "circle1")
  .append("circle")
    .attr("cx", 350)
    .attr("cy", 200)
    .attr("r", 180);

defs.append("clipPath")
    .attr("id", "circle2")
  .append("circle")
    .attr("cx", 550)
    .attr("cy", 200)
    .attr("r", 180);

const RD3Component = rd3.Component;

// export default React.createClass({

//   getInitialState: function() {
//     return {d3: ''}
//   },

//   componentDidMount: function() {
//     this.setState({d3: node});
//   },

//   render: function() {
//     return (
//       <div>
//         <RD3Component data={this.state.d3} />
//       </div>
//     )
//   }
// });