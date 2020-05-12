import React from 'react';
import './App.css';
import Header from "./Header";
import ParkControl from "./Parks/ParkControl"; 
import MapClass from "./MapClass";

function App() {
  return (
    <React.Fragment>
      <div className="ui container">
        <Header />
        {/* <MapClass /> */}
        <ParkControl />
      </div>
    </React.Fragment> 
  )
}

export default App;
