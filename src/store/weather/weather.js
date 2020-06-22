import weatherActions, {WEATHER_ACTIONS} from "./weatherActions";
import RequestHelper from "../../services/helpers/RequestHelper";
import {REQUEST_URL} from "../../services/GlobalConstants";
import WeatherForecast from "../../modules/WeatherForecast";
import LocalStorage from "../../services/helpers/LocalStorage";
import {useDispatch} from "react-redux";

const LS_FAVORITES = 'favoritesList'

let initialState = {
    current: null,
    favorites: []
};

let config = {
    headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '',
        'useQueryString': true,
    }
}
let requestData = {
    "callback": "test",
    "id": "2172797",
    "units": "metric",
    "mode": "xml, html"
}

const weather = (state = initialState, action) => {
    let res, favs = null
    let items = []
    switch (action.type) {
        case WEATHER_ACTIONS.LOAD_FORECAST:
            requestData.lat = action.lat
            requestData.lon = action.lon
            config.headers["x-rapidapi-key"] = process.env.REACT_APP_WEATHER_API_KEY
            // let res = RequestHelper.sendGetRequest(REQUEST_URL.WEATHER, requestData, config)
            res = require('../../assets/json/exampleForecastData_lt.json')
            return {current: new WeatherForecast().loadFromResponse(res), favorites: state.favorites};
        case WEATHER_ACTIONS.LOAD_FAVORITES:
            favs = LocalStorage.getDataByKey(LS_FAVORITES)
            items = []
            favs.forEach((favoriteItem) => {
                res = require('../../assets/json/exampleForecastData.json')
                items.push(new WeatherForecast().loadFromResponse(res))
            })
            return {current: state.current, favorites: items};
        case WEATHER_ACTIONS.ADD_FAVORITE:
            let favItem = {
                lat: action.lat,
                lon: action.lon,
                name: action.name
            }
            LocalStorage.saveToObjectArrayByIdKey(LS_FAVORITES, favItem, 'name')
            favs = LocalStorage.getDataByKey(LS_FAVORITES)
            items = []
            favs.forEach((favoriteItem) => {
                res = require('../../assets/json/exampleForecastData.json')
                items.push(new WeatherForecast().loadFromResponse(res))
            })
            return {current: state.current, favorites: items};
        case WEATHER_ACTIONS.REMOVE_FAVORITE:
            LocalStorage.removeFromObjectArrayByIdKey(LS_FAVORITES, 'name', action.name)
            favs = LocalStorage.getDataByKey(LS_FAVORITES)
            items = []
            favs.forEach((favoriteItem) => {
                res = require('../../assets/json/exampleForecastData.json')
                items.push(new WeatherForecast().loadFromResponse(res))
            })
            return {current: state.current, favorites: items};
        default:
            return state;
    }
};

export default weather;