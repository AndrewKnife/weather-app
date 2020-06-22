import React, {Component} from "react";
import weatherActions from "../store/weather/weatherActions";
import {connect} from 'react-redux'
import ForecastCard from "./ForecastCard";

const DEFAULT_WEATHER_LOCATION = 'Vilnius,Lithuania'

class CurrentWeather extends Component {

  componentDidMount() {
    if (this.props.history) {
      this.props.searchForecast(DEFAULT_WEATHER_LOCATION)
    } else if (!navigator.geolocation) {
      this.props.searchForecast(DEFAULT_WEATHER_LOCATION)
    }
  }

  componentDidUpdate(prevProps, prevState, ss) {
    if (prevProps.history !== this.props.history) {
      this.props.searchForecast(this.props.history)
    } else if (this.props.location && prevProps.location !== this.props.location && !this.props.history){
      this.props.loadForecast(this.props.location.lat, this.props.location.lon)
    }
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
    loadForecast: (lat, lon) => {
      dispatch(weatherActions.loadForecast(lat, lon))
    },
    searchForecast: (query) => {
      dispatch(weatherActions.searchForecast(query))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather)
