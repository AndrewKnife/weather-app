import RequestHelper from '../helpers/RequestHelper';
import {REQUEST_URL} from '../GlobalConstants';
import WeatherForecast from '../../modules/WeatherForecast';
import SiteConfig from '../SiteConfig';

const requestData = {
  appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
  lang: SiteConfig.locale,
  units: 'metric'
}

class WeatherHelper {
  static loadForecast(lat, lon) {
    requestData.lat = lat
    requestData.lon = lon
    requestData.q = null
    return this.getData(requestData)
  }

  static searchForecast(query) {
    requestData.q = query
    requestData.lat = null
    requestData.lon = null
    return this.getData(requestData)
  }

  static getData(req) {
    return RequestHelper.sendGetRequest(REQUEST_URL.WEATHER, req).then((res) => {
      return new WeatherForecast().loadFromResponse(res.data)
    }).catch((e) => {
      console.log(e)
      return new WeatherForecast().loadFromResponse(require('../../assets/json/exampleForecastData_lt.json'))
    })
  }
}

export default WeatherHelper