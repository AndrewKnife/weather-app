import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WeatherHelper from "../../services/api/WeatherHelper";
import {REQUEST_URL, WEATHER_LAYER} from "../../services/GlobalConstants";

const mapStyles = {
  width: '100%',
  height: '400px'
};

const layerOptions = {
  maxZoom: 18,
  appId: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
  tileSize: 512,
  zoomOffset: -1,
  opacity: 1
}

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      layer: null
    }
    this.setLayer = this.setLayer.bind(this)
  }
  
  componentDidMount() {
    if (typeof window.L !== undefined) {
      this.state.map = window.L.map('mapid').setView([this.props.lat, this.props.lon], 10)
       window.L.tileLayer(REQUEST_URL.MAPBOX, {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
      }).addTo(this.state.map);
      this.setLayer(this.props.selectedLayer)
    }
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.lat !== this.props.lat || prevProps.lon !== this.props.lon) {
      this.state.map.setView([this.props.lat, this.props.lon], 10)
    }
    if (prevProps.selectedLayer !== this.props.selectedLayer) {
      this.setLayer(this.props.selectedLayer,
      this.state.map.removeLayer(this.state.layer)
      )
    }
  }
  
  setLayer (layerName) {
    let options = layerOptions
    options.id = layerName
    this.state.layer = window.L.tileLayer(WeatherHelper.getTileUrl(layerName), options).addTo(this.state.map);
  }
  
  render() {
    return (
      <div id="mapid" style={mapStyles}></div>
    );
  }
}

MapContainer.propTypes = {
  lat: PropTypes.number,
  lon: PropTypes.number,
  selectedLayer: PropTypes.string
};

export default MapContainer;