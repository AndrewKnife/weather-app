import {WEATHER_ACTIONS} from "./weatherActions";
import RequestHelper from "../../services/helpers/RequestHelper";
import {REQUEST_URL} from "../../services/GlobalConstants";
import WeatherForecast from "../../modules/WeatherForecast";

let initialState = [];

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
    switch (action.type) {
        case WEATHER_ACTIONS.LOAD_FORECAST:
            requestData.lat = action.lat
            requestData.lon = action.lon
            config.headers["x-rapidapi-key"] = process.env.REACT_APP_WEATHER_API_KEY
            // let res = RequestHelper.sendGetRequest(REQUEST_URL.WEATHER, requestData, config)
            let res = require('../../assets/json/exampleForecastData.json')
            return [...state, new WeatherForecast().loadFromResponse(res)];
        default:
            return state;
    }
};

export default weather;