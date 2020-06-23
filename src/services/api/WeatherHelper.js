import RequestHelper from "../helpers/RequestHelper";
import {REQUEST_URL} from "../GlobalConstants";
import WeatherForecast from "../../modules/WeatherForecast";

let config = {
  headers: {
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_WEATHER_API_KEY,
    'useQueryString': true,
  }
}
let requestData = {
  callback: "test",
  id: "2172797",
  units: "metric"
}

class WeatherHelper {
  static loadForecast(lat, lon) {
    requestData.lat = lat
    requestData.lon = lon
    return this.getData(requestData)
  }

  static searchForecast(query) {
    requestData.q = query
    return this.getData(requestData)
  }

  static getData(requestData) {
    return RequestHelper.sendGetRequest(REQUEST_URL.WEATHER, requestData, config).then((res) => {
      res.data = res.data.replace('test(', '').replace(')', '')
      res.data = JSON.parse(res.data)
      return new WeatherForecast().loadFromResponse(res.data)
    })
  }
}

export default WeatherHelper