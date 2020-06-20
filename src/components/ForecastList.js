import React, {Component} from "react";
import weatherActions from "../store/weather/weatherActions";
import {connect} from 'react-redux'
import ForecastCard from "./ForecastCard";

class ForecastList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location !== this.props.location) {
            this.props.loadForecast(this.props.location.lat, this.props.location.lon)
        }
    }

    render() {
        return (
            <div>
                {this.props.weather.map((item, i) => {
                    return (<ForecastCard key={i} forecast={item}/>)
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        location: state.location,
        weather: state.weather
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadForecast: (lat, lon) => {
            dispatch(weatherActions.loadForecast(lat, lon))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastList)
