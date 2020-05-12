import React from "react";
import ParkListItem from './ParkListItem';
import PropTypes from 'prop-types';

function ParkList(props) {
 
  const {parkList, onClickingNew, onParkSelection} = props;

  return(
    <React.Fragment>
      <h1>Parks</h1>
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
    </React.Fragment>
  )
}

ParkList.propTypes = {
  parkList: PropTypes.arrayOf(PropTypes.object),
  onParkSelection: PropTypes.func,
  onClickingNew: PropTypes.func
}

export default ParkList;