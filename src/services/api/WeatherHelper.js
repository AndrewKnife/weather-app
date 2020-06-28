import RequestHelper from '../helpers/RequestHelper';
import {REQUEST_URL} from '../GlobalConstants';
import WeatherForecast from '../../modules/WeatherForecast';
import SiteConfig from '../SiteConfig';
import {formatString} from "../helpers/UtilityHelper";

const LAYER_NAME = {
  PRECIPITATION: 'precipitation_new',
  TEMPERATURE: 'temp_new',
  WIND: 'wind_new',
  PRESSURE: 'pressure_new',
  CLOUDS: 'clouds_new',
}

let requestData = {
  appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
  lang: SiteConfig.locale,
  units: 'metric'
}

class WeatherHelper {
  static loadForecast(lat, lon) {
    let req = {}
    req.q = null
    req.lat = lat
    req.lon = lon
    return this.getData(req)
  }

  static searchForecast(query) {
    let req = {}
    req.q = query
    req.lat = null
    req.lon = null
    return this.getData(req)
  }

  static getTileUrl(){
    return formatString(REQUEST_URL.WEATHER_MAPS_TILE, LAYER_NAME.TEMPERATURE, process.env.REACT_APP_OPEN_WEATHER_API_KEY)
  }

  static getData(req) {
    req.appid = requestData.appid
    req.lang = requestData.units
    req.units = requestData.units
    return RequestHelper.sendGetRequest(REQUEST_URL.WEATHER, req).then((res) => {
      return new WeatherForecast().loadFromResponse(res.data)
    }).catch((e) => {
      return new WeatherForecast().loadFromResponse(require('../../assets/json/exampleForecastData_lt.json'))
    })
  }
}

export default WeatherHelper