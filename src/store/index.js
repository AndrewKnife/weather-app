import { combineReducers } from 'redux'
import weather from './weather/weather'
import location from './location/location'

export const allReducers = combineReducers({
    weather,
    location
})