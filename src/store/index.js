import {combineReducers} from 'redux'
import weather from './weather/weather'
import location from './location/location'
import history from './history/history'

export const allReducers = combineReducers({
  weather,
  location,
  history
})