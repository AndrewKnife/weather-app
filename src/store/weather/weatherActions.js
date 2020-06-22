export const WEATHER_ACTIONS = {
  LOAD_FORECAST: 'LOAD_FORECAST',
  SEARCH_FORECAST: 'SEARCH_FORECAST',
  LOAD_FAVORITES: 'LOAD_FAVORITES',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE'
}

class weatherActions {
  static loadForecast = (lat, lon) => {
    return {
      type: WEATHER_ACTIONS.LOAD_FORECAST,
      lat,
      lon
    };
  };
  static searchForecast = (query) => {
    return {
      type: WEATHER_ACTIONS.LOAD_FORECAST,
      query
    };
  };
  static loadFavorites = () => {
    return {
      type: WEATHER_ACTIONS.LOAD_FAVORITES
    };
  };
  static addFavorite = (lat, lon, name) => {
    return {
      type: WEATHER_ACTIONS.ADD_FAVORITE,
      lat,
      lon,
      name
    };
  };
  static removeFavorite = (name) => {
    return {
      type: WEATHER_ACTIONS.REMOVE_FAVORITE,
      name
    };
  };
}

export default weatherActions