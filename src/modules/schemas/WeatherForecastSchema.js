class WeatherForecastSchema {
    constructor() {
        this.coord = {}
        this.weather = []
        this.base = ''
        this.main = {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0
        }
        this.visibility = 0
        this.wind = {
            speed: 0,
            deg: 0
        }
        this.clouds = {
            all: 0
        }
        this.dt = 0
        this.sys = {
            type: 0,
            id: 0,
            country: '',
            sunrise: 0,
            sunset: 0
        }
        this.timezone = 0
        this.id = 0
        this.name = ''
        this.cod = 0
    }
}

export default WeatherForecastSchema
