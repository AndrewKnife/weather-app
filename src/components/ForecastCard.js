import React from "react";
import WeatherForecast from "../modules/WeatherForecast";
import PropTypes from 'prop-types';
import TranslationsHelper from "../services/helpers/TranslationsHelper";
import weatherActions from "../store/weather/weatherActions";
import {connect} from "react-redux";
import {findObjectInArrayByKeyValue} from "../services/helpers/UtilityHelper";

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
                            onClick={this.toggleFavorite}>{this.state.isFavorite ? 'un' : ''}Favorite
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
