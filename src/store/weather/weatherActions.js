export const WEATHER_ACTIONS = {
    LOAD_FORECAST: 'LOAD_FORECAST'
}

class weatherActions {
    static loadForecast = (lat, lon) => {
        return {
            type: WEATHER_ACTIONS.LOAD_FORECAST,
            lat,
            lon
        };
    };
}

export default weatherActions