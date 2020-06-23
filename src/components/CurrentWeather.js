import React, {Component} from "react";
import weatherActions from "../store/weather/weatherActions";
import {connect} from 'react-redux'
import ForecastCard from "./ForecastCard";
import WeatherHelper from "../services/api/WeatherHelper";
import locationActions from "../store/location/locationActions";

const DEFAULT_WEATHER_LOCATION = 'Vilnius,Lithuania'

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.loadForecast = this.loadForecast.bind(this)
    this.searchForecast = this.searchForecast.bind(this)
  }

  componentDidMount() {
    if (this.props.history) {
      this.searchForecast(this.props.history)
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        if(position) {
         this.props.getLocation(position.coords.latitude, position.coords.longitude)
        } else {
          this.searchForecast(DEFAULT_WEATHER_LOCATION)
        }
      }, () => {
        this.searchForecast(DEFAULT_WEATHER_LOCATION)
      })
    } else if (!navigator.geolocation) {
      this.searchForecast(DEFAULT_WEATHER_LOCATION)
    }
  }

  componentDidUpdate(prevProps, prevState, ss) {
    if (prevProps.history !== this.props.history) {
      this.searchForecast(this.props.history)
    } else if (this.props.location && prevProps.location !== this.props.location && !this.props.history) {
      this.loadForecast(this.props.location.lat, this.props.location.lon)
    }
  }

  loadForecast(lat, lon) {
    WeatherHelper.loadForecast(lat, lon).then((res) => {
      this.props.loadForecast(res)
    })
  }

  searchForecast(query) {
    WeatherHelper.searchForecast(query).then((res) => {
      this.props.loadForecast(res)
      return res
    })
  }

  render() {
    return (
      <div>
        {this.props.weather.current &&
        <ForecastCard forecast={this.props.weather.current}/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    weather: state.weather,
    history: state.history,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadForecast: (obj) => {
      dispatch(weatherActions.loadForecast(obj))
    },
    getLocation: (lat, lon) => {
      dispatch(locationActions.getLocation(lat, lon))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather)
