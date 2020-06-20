import React from "react";
import WeatherForecast from "../modules/WeatherForecast";
import PropTypes from 'prop-types';
import TranslationsHelper from "../services/helpers/TranslationsHelper";

class ForecastCard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
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
                </div>
            </div>
        );
    }
}

ForecastCard.propTypes = {
    forecast: PropTypes.instanceOf(WeatherForecast)
};

export default ForecastCard
