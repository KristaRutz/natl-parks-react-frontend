import * as c from "./ActionTypes";

// universal
export const requestParks = () => ({
  type: c.REQUEST_PARKS
})
export const requestFailure = (error) => ({
  type: c.REQUEST_FAILURE,
  error
})
export const getParksSuccess = (parks) => ({
  type: c.GET_PARKS_SUCCESS,
  parks
})

// GET request: 
export const makeApiCallGetAll = () => {
  return dispatch => {
    dispatch(requestParks);
    return fetch(`http://park-info-api.azurewebsites.net/api/Parks`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getParksSuccess(jsonifiedResponse));
        })
      .catch((error) => {
        dispatch(requestFailure(error));
      });
  }
}
export const makeApiCallGetAllStates = () => {
  return dispatch => {
    dispatch(requestParks);
    return fetch(`http://park-info-api.azurewebsites.net/api/States`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getParksSuccess(jsonifiedResponse));
        })
      .catch((error) => {
        dispatch(requestFailure(error));
      });
  }
}

// POST request: new park
export const makeApiCallPost = (park) => {
  return dispatch => {
    dispatch(requestParks);
    return fetch(`http://park-info-api.azurewebsites.net/api/Parks`, {
      headers: {"Content-Type": "application/json"},
      method: 'POST',
      body: JSON.stringify(park)
    })
    .then(response => response.json())
    .then(jsonifiedResponse => {
      dispatch(getParksSuccess(jsonifiedResponse));
    })
    .catch(error => {
      dispatch(requestFailure(error));
    });
  }
}

// PUT request: edit with ID
export const makeApiCallPut = (editedPark) => {
  return dispatch => {
    dispatch(requestParks);
    return fetch(`http://park-info-api.azurewebsites.net/api/Parks/${editedPark.parkId}`, {
      headers: {"Content-Type": "application/json"},
      method: 'PUT',
      body: JSON.stringify(editedPark)
    })
    .then(response => response.json())
    .then(jsonifiedResponse => {
      dispatch(getParksSuccess(jsonifiedResponse));
    }).catch(error => {
      dispatch(requestFailure(error));
    })
  }
}

// DELETE request: remove park
export const makeApiCallDelete = (id) => {
  return dispatch => {
    dispatch(requestParks);
    return fetch(`http://park-info-api.azurewebsites.net/api/Parks/${id}`, {
      headers: {"Content-Type": "application/json"},
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(jsonifiedResponse => {
      dispatch(getParksSuccess(jsonifiedResponse));
    }).catch(error => {
      dispatch(requestFailure(error));
    });
  }
}

