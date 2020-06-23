import weatherActions, {WEATHER_ACTIONS} from "../weatherActions";

describe('weather actions', () => {
  it('action to load forecast', () => {
    const resObject = {}
    const expectedAction = {
      type: WEATHER_ACTIONS.LOAD_FORECAST,
      resObject
    }
    expect(weatherActions.loadForecast(resObject)).toEqual(expectedAction)
  })

  it('action to load favorites', () => {
    const favoritesList = [{}]
    const expectedAction = {
      type: WEATHER_ACTIONS.LOAD_FAVORITES,
      favoritesList
    }
    expect(weatherActions.loadFavorites(favoritesList)).toEqual(expectedAction)
  })

  it('action to add favorite', () => {
    const favoriteObject = {}
    const expectedAction = {
      type: WEATHER_ACTIONS.ADD_FAVORITE,
      favoriteObject
    }
    expect(weatherActions.addFavorite(favoriteObject)).toEqual(expectedAction)
  })

  it('action to remove favorite', () => {
    const name = 'test'
    const expectedAction = {
      type: WEATHER_ACTIONS.REMOVE_FAVORITE,
      name
    }
    expect(weatherActions.removeFavorite(name)).toEqual(expectedAction)
  })
})