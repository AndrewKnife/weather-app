export const WEATHER_ACTIONS = {
  LOAD_FORECAST: 'LOAD_FORECAST',
  LOAD_FAVORITES: 'LOAD_FAVORITES',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE'
}

class weatherActions {
  static loadForecast = (resObject) => {
    return {
      type: WEATHER_ACTIONS.LOAD_FORECAST,
      resObject
    };
  };
  static loadFavorites = (arrayOfObjects) => {
    return {
      type: WEATHER_ACTIONS.LOAD_FAVORITES,
      favoritesList: arrayOfObjects
    };
  };
  static addFavorite = (favoriteObject) => {
    return {
      type: WEATHER_ACTIONS.ADD_FAVORITE,
      favoriteObject
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