import locationActions, {LOCATION_ACTIONS} from '../../location/locationActions';
import location from '../location';

const props = {
  lat: 'lat',
  lon: 'lon'
}

describe('location actions', () => {
  it('action to get location', () => {
    const expectedAction = {
      type: LOCATION_ACTIONS.GET_LOCATION,
      ...props
    }
    expect(locationActions.getLocation(props.lat, props.lon)).toEqual(expectedAction)
  })
})

describe('location reducer', () => {
  it('should return the initial state', () => {
    expect(location(undefined, {})).toEqual(null)
  })

  it('should handle GET_LOCATION', () => {
    expect(
      location([], {
        type: LOCATION_ACTIONS.GET_LOCATION,
        ...props
      })
    ).toEqual(props)
  })
})