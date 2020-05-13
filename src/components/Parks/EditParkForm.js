import React from "react";
import PropTypes from "prop-types";

function EditParkForm(props) {

  const {park, onEditPark} = props;

  const handleEditingPark = event => {
    event.preventDefault();
    const parkToEdit = {
      "parkId": park.parkId,
      "name": event.target.parkName.value,
      "type": event.target.type.value,
      "description": event.target.description.value,
      "location": event.target.location.value,
      "stateId": parseInt(event.target.state.value),
    }
    onEditPark(parkToEdit);
  }

  return(<>
    <h1>Edit park in the database</h1>
    <form className="ui form" onSubmit={handleEditingPark}>
      <label name="parkName">Park Name:</label>
      <input type="text" name="parkName" defaultValue={park.name} required/>
      <br />
      <label name="type">National or State?:</label>
      <input type="text" name="type" defaultValue={park.type} required/>
      <br />
      <label name="description">Description:</label>
      <textarea name="description" defaultValue={park.description} required/>
      <br />
      <label name="location">Location:</label>
      <input type="text" name="location" defaultValue={park.location} required/>
      <br />
      <label name="state">State:</label>
      <select name="state" id="state" defaultValue={park.stateId}>
      <option value="1">Alabama</option>
        <option value="2">Alaska</option>
        <option value="3">Arizona</option>
        <option value="4">Arkansas</option>
        <option value="5">California</option>
        <option value="6">Colorado</option>
        <option value="7">Connecticut</option>
        <option value="8">Delaware</option>
        <option value="9">District Of Columbia</option>
        <option value="10">Florida</option>
        <option value="11">Georgia</option>
        <option value="12">Hawaii</option>
        <option value="13">Idaho</option>
        <option value="14">Illinois</option>
        <option value="15">Indiana</option>
        <option value="16">Iowa</option>
        <option value="17">Kansas</option>
        <option value="18">Kentucky</option>
        <option value="19">Louisiana</option>
        <option value="20">Maine</option>
        <option value="21">Maryland</option>
        <option value="22">Massachusetts</option>
        <option value="23">Michigan</option>
        <option value="24">Minnesota</option>
        <option value="25">Mississippi</option>
        <option value="26">Missouri</option>
        <option value="27">Montana</option>
        <option value="28">Nebraska</option>
        <option value="29">Nevada</option>
        <option value="30">New Hampshire</option>
        <option value="31">New Jersey</option>
        <option value="32">New Mexico</option>
        <option value="33">New York</option>
        <option value="34">North Carolina</option>
        <option value="35">North Dakota</option>
        <option value="36">Ohio</option>
        <option value="37">Oklahoma</option>
        <option value="38">Oregon</option>
        <option value="39">Pennsylvania</option>
        <option value="40">Rhode Island</option>
        <option value="41">South Carolina</option>
        <option value="42">South Dakota</option>
        <option value="43">Tennessee</option>
        <option value="44">Texas</option>
        <option value="45">Utah</option>
        <option value="46">Vermont</option>
        <option value="47">Virginia</option>
        <option value="48">Washington</option>
        <option value="49">West Virginia</option>
        <option value="50">Wisconsin</option>
        <option value="51">Wyoming</option>
      </select>
      <br />
      <button type="submit" className="ui labeled icon button">
        <i className="save icon"></i>
        Save Changes
      </button>
    </form>
  </>
  )
}

EditParkForm.propTypes = {
  park: PropTypes.object,
  onEditPark: PropTypes.func
}

export default EditParkForm;