import React from "react";
import {WEATHER_ACTIONS} from "../store/weather/weatherActions";
import {connect} from 'react-redux'

class ForecastList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        this.props.loadForecast()
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    {this.props.nice}
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state,
        nice: 'state'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadForecast: () => { dispatch({type: WEATHER_ACTIONS.LOAD_FORECAST}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastList)
