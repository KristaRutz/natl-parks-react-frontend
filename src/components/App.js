import React from 'react';
import './App.css';
import Header from "./Header";
import ParkControl from "./Parks/ParkControl"; 
import MapComponent from "./Map.js";
import RD3Component from "./RD3Component";

function App() {
  return (
    <React.Fragment>
      <div className="ui container">
        <Header />
        <MapComponent />
        <ParkControl />
      </div>
    </React.Fragment> 
  )
}

export default App;
