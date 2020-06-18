import WeatherForecastSchema from "./schemas/WeatherForecastSchema";
import ObjectLoader from "../services/helpers/ObjectLoader";

class WeatherForecast extends WeatherForecastSchema {
    loadFromResponse (rawObject) {
        ObjectLoader.loadFromResponse(this, rawObject)
        return this
    }
}

export default WeatherForecast
