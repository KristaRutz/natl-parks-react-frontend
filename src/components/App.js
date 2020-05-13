import React from 'react';
import './App.css';
import Header from "./Header";
import ParkControl from "./Parks/ParkControl"; 

function App() {
  return (
    <React.Fragment>
      <div className="ui container">
        <Header />
        <ParkControl />
      </div>
    </React.Fragment> 
  )
}

export default App;
