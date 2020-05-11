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
      dispatch(postParkSuccess(park));
    })
    .catch(error => {
      dispatch(requestFailure(error));
    });
  }
}

