import * as c from "./ActionTypes";

export const requestParks = () => ({
  type: c.REQUEST_PARKS
})

export const getParksSuccess = (parks) => ({
  type: c.GET_PARKS_SUCCESS,
  parks
})

export const getParksFailure = (error) => ({
  type: c.GET_PARKS_FAILURE,
  error
})

export const makeApiCallGetAll = () => {
  return dispatch => {
    dispatch(requestParks);
    return fetch(`http://park-info-api.azurewebsites.net/api/Parks`, {mode:'no-cors'})
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          console.log("RESPONSE", jsonifiedResponse);
          dispatch(getParksSuccess(jsonifiedResponse.results));
        })
      .catch((error) => {
        dispatch(getParksFailure(error));
      });
  }
}