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
    return fetch(`http://park-info-api.azurewebsites.net/api/Parks`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getParksSuccess(jsonifiedResponse));
        })
      .catch((error) => {
        dispatch(getParksFailure(error));
      });
  }
}

export const requestToPostPark = (park) => ({
  type: c.REQUEST_TO_POST_PARK,
  park
})
export const postParkFailure = () => ({});
export const postParkSuccess = () => ({});

export const makeApiCallPost = (park) => {
  return dispatch => {
    dispatch(() => requestToPostPark(park));
    const body = {
        "Name": park.name,
        "Type": park.type,
        "Description": park.description,
        "Location": park.location,
        "StateId": park.stateId,
    }
    return fetch(`http://park-info-api.azurewebsites.net/api/Parks`, {
      method: 'POST',
      body: body
    }).then(response => response.json()).then(jsonifiedResponse => {
      dispatch(postParkSuccess(jsonifiedResponse));
    })
    .catch(error => {
      dispatch(postParkFailure(error));
    });
  }
}