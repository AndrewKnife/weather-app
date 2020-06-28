import React, {Component, Suspense} from 'react'
import {connect} from 'react-redux'
import {MapControls} from "./MapControls";
import {WEATHER_LAYER} from "../../services/GlobalConstants";

const MapContainer = React.lazy(() => {
  return import('./MapContainer');
})

export class MapWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasWeatherData: this.props.weather && this.props.weather.current,
      coord: {
        lat: null,
        lon: null
      },
      selectedLayer: WEATHER_LAYER.TEMPERATURE.name
    }
    this.toggleLayer = this.toggleLayer.bind(this)
  }
  
  toggleLayer(layerName) {
    this.setState({selectedLayer: layerName})
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.weather.current !== this.props.weather.current) {
      this.setState({
        hasWeatherData: !(!this.props.weather),
        coord: this.props.weather.current.coord
      })
    }
  }
  
  render() {
    return (
      <div className="col-12 position-relative m-auto mb-4" style={{maxWidth: '800px'}}>
        {this.state.hasWeatherData && this.state.coord.lat ? (
          <Suspense fallback={null}>
            <MapContainer lat={this.state.coord.lat} lon={this.state.coord.lon}/>
            <MapControls selectedLayer={this.state.selectedLayer} onClick={this.toggleLayer}/>
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
