import React from "react";

function NewParkForm() {
  const handleAddingNewPark = event => {
    event.preventDefault();
    /*
    const newPark = {
      "Name": event.target.parkName.value,
      "Type": "string",
      "Description": "string",
      "Location": "string",
      "StateId": 0,
      "State": {
        "StateId": 0,
        "Name": "string",
        "NumberParks": 0,
        "Parks": [
          null
        ]
      }
    }
    */
    // send to API with POST request
    // callback or hooks to handle state
  }

  return (<>
    <h1>Add a park to the database</h1>
    <form onSubmit={handleAddingNewPark}>
      <input type="text" name="parkName" placeholder="Full name of park (e.g. 'Pinnacles National Park')"/>
      <input type="text" name="type" placeholder="Type of park (e.g. 'national', 'state')"/>
      <textarea name="description" placeholder="A description of the geographical features and recreation options in this park"/>
      <input type="text" name="location" placeholder="Location within state, as city or region"/>
      <select name="state" id="state">
        <option value="" selected="selected">Select a State</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="1">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="4">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="2">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="3">Wyoming</option>
      </select>
      <button type="submit">Add</button>
    </form>
  </>)
}

export default NewParkForm;