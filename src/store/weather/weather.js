import {WEATHER_ACTIONS} from "./weatherActions";

let initialState = {
  current: null,
  favorites: []
};

const weather = (state = initialState, action) => {
  let items = []
  switch (action.type) {
    case WEATHER_ACTIONS.LOAD_FORECAST:
      return {current: action.resObject, favorites: state.favorites}
    case WEATHER_ACTIONS.LOAD_FAVORITES:
      return {current: state.current, favorites: action.favoritesList};
    case WEATHER_ACTIONS.ADD_FAVORITE:
      items = state.favorites || []
      items.push(action.favoriteObject)
      return {current: state.current, favorites: items};
    case WEATHER_ACTIONS.REMOVE_FAVORITE:
      items = state.favorites || []
      items = items.filter((favorite) => {
        return action.name !== favorite.name
      })
      return {current: state.current, favorites: items};
    default:
      return state;
  }
};

export default weather;