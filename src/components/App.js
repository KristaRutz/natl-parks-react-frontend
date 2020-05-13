import React from 'react';
import './App.css';
import Header from "./Header";
import ParkControl from "./Parks/ParkControl"; 
import Map from "./Map";
import RD3Component from "./RD3Component";

function App() {
  return (
    <React.Fragment>
      <div className="ui container">
        <Header />
        <Map />
        <ParkControl />
      </div>
    </React.Fragment> 
  )
}

export default App;
