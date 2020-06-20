import React from "react";
import WeatherForecast from "../modules/WeatherForecast";
import PropTypes from 'prop-types';
import TranslationsHelper from "../services/helpers/TranslationsHelper";
import weatherActions from "../store/weather/weatherActions";
import {connect} from "react-redux";
import UtilityHelper from "../services/helpers/UtilityHelper";

class ForecastCard extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleFavorite() {
        if (this.isFavorite()) {
            this.props.removeFavorite(this.props.forecast.name)
        } else {
            this.props.addFavorite(this.props.forecast.coord.lat, this.props.forecast.coord.lon, this.props.forecast.name)
        }
    }

    isFavorite() {
        return UtilityHelper.findObjectInArrayByKeyValue(this.props.weather.favorites, 'name', this.props.forecast.name) !== null
    }

    render() {
        let isFavorite = this.isFavorite()
        return (
            <div className="text-center forecast-card m-auto my-4">
                <span>{this.props.forecast.name}</span>
                <div className="col-12">
                    <div className="d-inline-block"></div>
                    <div className="d-inline-block">{this.props.forecast.main.temp}</div>
                    <div className="d-inline-block">
                        <div>{TranslationsHelper.translate('precipitation')}</div>
                        <div>{TranslationsHelper.translate('humidity')}</div>
                        <div>{TranslationsHelper.translate('wind')}</div>
                    </div>
                    <div className="position-absolute">
                        <button
                            onClick={this.toggleFavorite.bind(this)}>{isFavorite ? 'un' : ''}Favorite
                        </button>
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
