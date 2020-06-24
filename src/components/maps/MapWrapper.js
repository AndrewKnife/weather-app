import React, {Component, Suspense} from 'react'
import {connect} from 'react-redux'

const MapContainer = React.lazy(() => {
  return import('./MapContainer');
})

export class MapWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasWeatherData: this.props.weather && this.props.weather.current
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.weather !== this.props.weather) {
      this.setState({
        hasWeatherData: !(!this.props.weather)
      })
    }
  }

  render() {
    return (
      <div className="col-12 position-relative m-auto mb-4" style={{maxWidth: '800px'}}>
        {this.state.hasWeatherData ? (
          <Suspense fallback={null}>
            <MapContainer lat={this.props.weather.current.coord.lat} lon={this.props.weather.current.coord.lon}/>
          </Suspense>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(MapWrapper)
