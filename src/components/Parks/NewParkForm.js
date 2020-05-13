import React from "react";
import PropTypes from "prop-types";

function NewParkForm(props) {
  const handleAddingNewPark = event => {
    event.preventDefault();
    const newPark = {
      "name": event.target.parkName.value,
      "type": event.target.type.value,
      "description": event.target.description.value,
      "location": event.target.location.value,
      "stateId": parseInt(event.target.state.value),
    }
    props.onFormSubmit(newPark);
  }

  const addFormStyle = {
    marginTop: '50px'
  }

  return (
  <>
  <div style={addFormStyle}>
  <h2 className="ui header"><i aria-hidden="true" className="add icon"></i>
Add a park to the database</h2>
 
  <div className='ui form'>
    <div className="eight wide field">
    <form onSubmit={handleAddingNewPark}>
      <div className='field'>
          <label name="parkName">Park Name:</label>
          <input type="text" name="parkName" placeholder="Full name of park (e.g. 'Pinnacles National Park')" required/>
          <br />
      </div>
      <div className='field'>
        <label name="type">National or State?:</label>
          <input type="text" name="type" placeholder="Type of park (e.g. 'national', 'state')" required/>
          <br />
          <label name="description">Description:</label>
          <textarea name="description" placeholder="A description of the geographical features and recreation options in this park" required/>
          <br />
      </div>
      <div className="field">
        <label name="location">Location:</label>
          <input type="text" name="location" placeholder="Location within state, as city or region" required/>
          <br />
      </div>
      <div className="field">
      <label name="state">State:</label>
        <select className="ui search dropdown" name="state" id="state">
          <option defaultValue="0">Select a State</option>
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
      </div>
        <button type="submit" className="ui labeled icon button">
          <i className="plus icon"></i>
          Add
        </button>
      </form>
    </div>
    </div>
  </div>
  </>
  )
}

NewParkForm.propTypes = {
  onFormSubmit: PropTypes.func
}

export default NewParkForm;