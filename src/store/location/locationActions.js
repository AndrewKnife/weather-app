export const LOCATION_ACTIONS = {
  GET_LOCATION: 'GET_LOCATION',
  GET_ADDRESS: 'GET_ADDRESS'
}

class locationActions {
  static getLocation = (lat, lon) => {
    return {
      type: LOCATION_ACTIONS.GET_LOCATION,
      lat,
      lon
    };
  };
}

export default locationActions