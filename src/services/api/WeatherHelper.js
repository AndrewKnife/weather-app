import RequestHelper from '../helpers/RequestHelper';
import {REQUEST_URL} from '../GlobalConstants';
import WeatherForecast from '../../modules/WeatherForecast';
import SiteConfig from '../SiteConfig';
import {formatString} from "../helpers/UtilityHelper";

const LAYER_NAME = {
  AIR_TEMPERATURE: 'TA2',
  ACCUMULATED_PRECIPITATION: 'PA0',
  ATMOSPHERIC_PRESSURE: 'APM',
  WIND_SPEED: 'WND',
}

let requestData = {
  appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
  lang: SiteConfig.locale,
  units: 'metric'
}

let mapData = {
  layer: LAYER_NAME.ACCUMULATED_PRECIPITATION,
  z: '14',
  x: '139',
  y: '35'
}

let mapConfig = {
  appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
  date: 1527811200
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

  static getMap() {
    let url = formatString(REQUEST_URL.WEATHER_MAPS, mapData.layer, mapData.z, mapData.x, mapData.y)
    return RequestHelper.sendGetRequest(url, mapConfig, {headers: {appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY}}).then((res) => {
      return new WeatherForecast().loadFromResponse(res.data)
    })
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