import {LOCATION_ACTIONS} from "./locationActions";

let initialState = null;

const location = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_ACTIONS.GET_LOCATION:
      console.log('location', state)
      console.log('location initialState', initialState)
      return {lat: action.lat, lon: action.lon}
    default:
      return state
  }
};

export default location;