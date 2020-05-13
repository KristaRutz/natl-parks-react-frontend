import React from "react";
import ParkListItem from './ParkListItem';
import PropTypes from 'prop-types';
import MapComponent from '../Map';

function ParkList(props) {
 
  const {parkList, onParkSelection} = props;

  return(
    <React.Fragment>
      <h1 className="ui center aligned header">All Parks</h1>
      <MapComponent />
      <div className="ui three cards">
        {parkList.map((park) => {
            return <ParkListItem 
              whenParkClicked = {onParkSelection}
              name={park.name}
              type={park.type}
              description={park.description}
              location={park.location}
              state={park.state.name}
              id = {park.parkId}
              key = {park.parkId} 
            />
          })}
      </div>
    </React.Fragment>
  )
}

ParkList.propTypes = {
  parkList: PropTypes.arrayOf(PropTypes.object),
  onParkSelection: PropTypes.func,
}

export default ParkList;