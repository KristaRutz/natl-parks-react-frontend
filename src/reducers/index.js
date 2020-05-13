import * as c from './../actions/ActionTypes';
import statesData from "../components/parkDensityData.json";

let initialState = {
  states: statesData,
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
    case c.GET_STATES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        states: action.states
      });
    case c.REQUEST_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    case c.DELETE_PARK_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
      });
    default:
      return state;
  }
};