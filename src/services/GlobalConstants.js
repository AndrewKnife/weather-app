export const REQUEST_URL = {
    WEATHER: 'https://api.openweathermap.org/data/2.5/weather',
    MAPBOX: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
    WEATHER_MAPS_TILE: 'http://tile.openweathermap.org/map/%s/{z}/{x}/{y}.png?appid=%s',
}

export const ICON = {
    STAR_FULL: '#star_full',
    STAR_EMPTY: '#star_empty'
}

export const UNIT = {
    CELSIUS: "°C",
    PERCENT: "%",
    KM_H: "km/h",
    MILLIBARS: "mb"
}

export const STORAGE_KEY = {
    FAVORITES: 'favoritesList'
}
