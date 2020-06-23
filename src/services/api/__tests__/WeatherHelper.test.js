import {REQUEST_URL} from "../../GlobalConstants";
import WeatherHelper from "../WeatherHelper";
import WeatherForecast from "../../../modules/WeatherForecast";

var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

describe('WeatherHelper', () => {
  it('returns WeatherForecast', done => {
    var mock = new MockAdapter(axios);
    const data = new WeatherForecast().loadFromResponse(require('../../../assets/json/exampleForecastData_lt.json'));
    mock.onGet(REQUEST_URL.WEATHER).reply(200, data);

    WeatherHelper.searchForecast('query').then((res) => {
      expect(res).toEqual(data);
      done();
    })
  });
});