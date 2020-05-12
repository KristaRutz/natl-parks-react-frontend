import React from "react";
import PropTypes from "prop-types";

function ParkDetail(props) {

  const { park, onClickingEdit, onClickingDelete } = props;

  return(
    <React.Fragment>
      <h1>Park Details</h1>
      <div>
        <h3>{park.name}</h3>
        <h4>Type: {park.type}</h4>
        <h4>Location: {park.location} | {park.state.name}</h4>
        <p>{park.description}</p>
        <hr />
        <button class="ui primary button" onClick = {() => onClickingEdit()}>Edit Park Info</button>
        <button class="ui secondary button" onClick = {() => onClickingDelete(park.parkId)} >Delete Park</button>
      </div>
    </React.Fragment>
  )
}

ParkDetail.propTypes = {
  park: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default ParkDetail;