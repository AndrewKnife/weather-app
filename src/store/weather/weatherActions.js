export const WEATHER_ACTIONS = {
    LOAD_FORECAST: 'LOAD_FORECAST'
}

class weatherActions {
    static loadForecast = () => {
        return {
            type: WEATHER_ACTIONS.LOAD_FORECAST
        };
    };
}

export default weatherActions