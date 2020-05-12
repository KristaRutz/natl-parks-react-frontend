import * as c from "./ActionTypes";

// universal
export const requestParks = () => ({
  type: c.REQUEST_PARKS
})
export const requestFailure = (error) => ({
  type: c.REQUEST_FAILURE,
  error
})

// GET request: 
export const getParksSuccess = (parks) => ({
  type: c.GET_PARKS_SUCCESS,
  parks
})
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

// GET request: one by ID
// export const getParkByIdSuccess = (parks) => ({
//   type: c.GET_PARKS_SUCCESS,
//   parks
// })
// export const makeApiCallGetAll = () => {
//   return dispatch => {
//     dispatch(requestParks);
//     return fetch(`http://park-info-api.azurewebsites.net/api/Parks`)
//       .then(response => response.json())
//       .then(
//         (jsonifiedResponse) => {
//           dispatch(getParksSuccess(jsonifiedResponse));
//         })
//       .catch((error) => {
//         dispatch(requestFailure(error));
//       });
//   }
// }

// POST request: new park
export const postParkSuccess = (park) => ({
  type: c.POST_PARK_SUCCESS,
  park
});
export const makeApiCallPost = (park) => {
  return dispatch => {
    dispatch(requestParks);
    return fetch(`http://park-info-api.azurewebsites.net/api/Parks`, {
      headers: {"Content-Type": "application/json"},
      method: 'POST',
      body: JSON.stringify(park)
    }).then(response => { console.log(response);
      // request the latest park added to the SQL database, and then dispatch it on next line!
      // currently park = form object, is incomplete.
      dispatch(postParkSuccess(park));
    })
    .catch(error => {
      dispatch(requestFailure(error));
    });
  }
}

// PUT request: edit with ID
export const putParkSuccess = (editedPark) => ({
  type: c.PUT_PARK_SUCCESS,
  park: editedPark
})
export const makeApiCallPut = (editedPark) => {
  return dispatch => {
    dispatch(requestParks);
    return fetch(`http://park-info-api.azurewebsites.net/api/Parks`, {
      headers: {"Content-Type": "application/json"},
      method: 'PUT',
      body: JSON.stringify(editedPark)
    }).then(response => {
      dispatch(putParkSuccess(editedPark));
    }).catch(error => {
      dispatch(requestFailure(error));
    })
  }
}

// DELETE request: remove park
export const deleteParkSuccess = (park) => ({
  type: c.DELETE_PARK_SUCCESS,
  park
});
export const makeApiCallDelete = (park) => {
  return dispatch => {
    dispatch(requestParks);
    return fetch(`http://park-info-api.azurewebsites.net/api/Parks`, {
      headers: {"Content-Type": "application/json"},
      method: 'DELETE',
      body: JSON.stringify(park)
    }).then(response => { console.log(response);
      dispatch(deleteParkSuccess(park));
    })
    .catch(error => {
      dispatch(requestFailure(error));
    });
  }
}

