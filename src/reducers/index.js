import * as c from './../actions/ActionTypes';

let initialState = {
  parks: [],
  isLoading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_PARKS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_PARKS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        parks: action.parks
      });
    case c.REQUEST_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    case c.POST_PARK_SUCCESS:
      console.log("POST park was successful", action.park);
      return Object.assign({}, state, {
        isLoading: false,
        //parks: [...state.parks, action.park]
      });
    default:
      return state;
  }
};