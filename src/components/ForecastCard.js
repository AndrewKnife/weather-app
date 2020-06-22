import React from "react";
import WeatherForecast from "../modules/WeatherForecast";
import PropTypes from 'prop-types';
import TranslationsHelper from "../services/helpers/TranslationsHelper";
import weatherActions from "../store/weather/weatherActions";
import {connect} from "react-redux";
import {findObjectInArrayByKeyValue} from "../services/helpers/UtilityHelper";
import SvgWrapper from "./basic/SvgWrapper";
import {ICON} from "../services/GlobalConstants";

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
            <div className="text-center forecast-card m-auto my-4 pb-4 px-4">
                <div className="card-header d-flex justify-between">
                    <h3>{this.props.forecast.name}</h3>
                    <button onClick={this.toggleFavorite} className="button-clear">
                        <SvgWrapper icon={this.state.isFavorite? ICON.STAR_FULL : ICON.STAR_EMPTY} dimensions="35px" color="f-gold"/>
                    </button>
                </div>
                <div className="col-12 text-center d-block">
                    <div className="d-inline-block"></div>
                    <div className="d-inline-block">{this.props.forecast.main.temp}</div>
                    <div className="d-inline-block">
                        <div>{TranslationsHelper.translate('precipitation')}: {this.props.forecast.main.temp}</div>
                        <div>{TranslationsHelper.translate('humidity')}: {this.props.forecast.main.humidity}</div>
                        <div>{TranslationsHelper.translate('wind')}: {this.props.forecast.main.pressure}</div>
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
