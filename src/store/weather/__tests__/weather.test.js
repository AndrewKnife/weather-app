import weatherActions, {WEATHER_ACTIONS} from "../weatherActions";
import weather from "../weather";
import WeatherForecast from "../../../modules/WeatherForecast";

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

describe('weather reducer', () => {
  const resObject = new WeatherForecast().loadFromResponse(require('../../../assets/json/exampleForecastData_lt.json'))

  const expectState = {
    current: resObject
  }

  const expectFavoritesState = {
    favorites: [resObject, resObject]
  }

  it('should return the initial state', () => {
    expect(weather(undefined, {})).toEqual({"current": null, "favorites": []})
  })

  it('should handle LOAD_FORECAST', () => {
    expect(
      weather([], {
        type: WEATHER_ACTIONS.LOAD_FORECAST,
        resObject
      })
    ).toEqual(expectState)
  })

  it('should handle LOAD_FAVORITES', () => {
    expect(
      weather([], {
        type: WEATHER_ACTIONS.LOAD_FAVORITES,
        favoritesList: [resObject, resObject]
      })
    ).toEqual(expectFavoritesState)
  })

  it('should handle ADD_FAVORITE', () => {
    expect(
      weather([], {
        type: WEATHER_ACTIONS.ADD_FAVORITE,
        favoriteObject: resObject
      })
    ).toEqual({favorites: [resObject]})
  })

  it('should handle REMOVE_FAVORITE', () => {
    weather([], {
      type: WEATHER_ACTIONS.ADD_FAVORITE,
      favoriteObject: resObject
    })
    expect(
      weather([], {
        type: WEATHER_ACTIONS.REMOVE_FAVORITE,
        name: 'Vilnius'
      })
    ).toEqual({favorites: []})
  })
})