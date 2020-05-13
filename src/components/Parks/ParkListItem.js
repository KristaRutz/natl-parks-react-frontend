import React from "react";
import PropTypes from 'prop-types';

function ParkListItem(props) {

  const {name, type, location, state, id, whenParkClicked }= props;

  const cardStyle = {
    padding: '10px',
    transform: 'scale(0.9)'
  }

  return (
    <React.Fragment>
      <div style={cardStyle} className="ui card min-width" >
        <h3>{name}</h3>
        {/* <h4>Type: {type}</h4> */}
        <h4>Location: {location} | {state}</h4>
        
        <div className="ui bottom attached button" onClick = {() => whenParkClicked(id)}>
        Park Details
        </div>
      </div>

    </React.Fragment>
  )
}

ParkListItem.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  state: PropTypes.string,
  id: PropTypes.number,
  whenParkClicked: PropTypes.func
}
export default ParkListItem;