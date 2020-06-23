import locationActions, {LOCATION_ACTIONS} from "../../location/locationActions";

describe('location actions', () => {
  it('action to get location', () => {
    const props = {
      lat: 'lat',
      lon: 'lon'
    }
    const expectedAction = {
      type: LOCATION_ACTIONS.GET_LOCATION,
      ...props
    }
    expect(locationActions.getLocation(props.lat, props.lon)).toEqual(expectedAction)
  })
})