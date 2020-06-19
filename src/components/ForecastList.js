import React from "react";
import weatherActions from "../store/weather/weatherActions";
import {connect} from 'react-redux'

class ForecastList extends React.Component {
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
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    {'labas'}
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        location: state.location
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
