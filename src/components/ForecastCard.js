import React from "react";
import WeatherForecast from "../modules/WeatherForecast";
import PropTypes from 'prop-types';
import TranslationsHelper from "../services/helpers/TranslationsHelper";
import weatherActions from "../store/weather/weatherActions";
import {connect} from "react-redux";
import {findObjectInArrayByKeyValue} from "../services/helpers/UtilityHelper";
import SvgWrapper from "./basic/SvgWrapper";
import {ICON, UNIT} from "../services/GlobalConstants";

class ForecastCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false
    }
    this.toggleFavorite = this.toggleFavorite.bind(this)
    this.checkFavorite = this.checkFavorite.bind(this)
  }

  toggleFavorite() {
    this.checkFavorite()
    if (this.state.isFavorite) {
      this.props.removeFavorite(this.props.forecast.name)
    } else {
      this.props.addFavorite(this.props.forecast.coord.lat, this.props.forecast.coord.lon, this.props.forecast.name)
    }
  }

  componentDidMount() {
    this.checkFavorite()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.weather.favorites !== this.props.weather.favorites) {
      this.checkFavorite()
    }
  }

  checkFavorite = () => {
    this.setState(() => ({
        isFavorite: findObjectInArrayByKeyValue(this.props.weather.favorites, 'name', this.props.forecast.name) !== null
      })
    )
  }

  render() {
    return (
      <div className="text-center forecast-card m-auto my-4 pb-4 px-4 bg-sky">
        <div className="card-header d-flex justify-between">
          <h3>{this.props.forecast.name}</h3>
          <button onClick={this.toggleFavorite} className="button-clear">
            <SvgWrapper icon={this.state.isFavorite ? ICON.STAR_FULL : ICON.STAR_EMPTY} dimensions="35px"
                        color="f-gold"/>
          </button>
        </div>
        <div className="col-12 text-center d-flex items-center">
          <div className="col-2">
            <img src={require('../assets/images/weather/01d.png')} className="weather-icon pb-5" alt="weather-icon"
                 width="100px"/>
          </div>
          <div className="col-5 position-relative d-flex justify-center items-center">
            <span className="font-size-xxxl display-inline-block position-relative">
              {this.props.forecast.main.temp} <span className="font-size-l position-absolute">{UNIT.CELSIUS}</span>
            </span>
            <span className="font-size-xxl c-sea display-inline-block position-relative pl-3">
               /{this.props.forecast.main.temp_min}
              <span className="font-size-l position-absolute">{UNIT.CELSIUS}</span>
            </span>
          </div>
          <div className="col-5">
            <table className="d-inline-block text-left">
              <tbody>
              <tr>
                <td>{TranslationsHelper.translate('pressure')}:</td>
                <td>{this.props.forecast.main.pressure}{UNIT.MILLIBARS}</td>
              </tr>
              <tr>
                <td>{TranslationsHelper.translate('humidity')}:</td>
                <td>{this.props.forecast.main.humidity}{UNIT.PERCENT}</td>
              </tr>
              <tr>
                <td>{TranslationsHelper.translate('wind')}:</td>
                <td>{this.props.forecast.wind.speed}{UNIT.KM_H}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (lat, lon, name) => {
      dispatch(weatherActions.addFavorite(lat, lon, name))
    },
    removeFavorite: (name) => {
      dispatch(weatherActions.removeFavorite(name))
    }
  }
}

ForecastCard.propTypes = {
  forecast: PropTypes.instanceOf(WeatherForecast)
};

export default connect(mapStateToProps, mapDispatchToProps)(ForecastCard)
