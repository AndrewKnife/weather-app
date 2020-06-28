import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WeatherHelper from "../../services/api/WeatherHelper";
import {REQUEST_URL} from "../../services/GlobalConstants";

const mapStyles = {
  width: '100%',
  height: '400px'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null
    }
  }
  
  componentDidMount() {
    if (typeof window.L !== undefined) {
      this.state.map = window.L.map('mapid').setView([this.props.lat, this.props.lon], 11);
      window.L.tileLayer(REQUEST_URL.MAPBOX, {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
      }).addTo(this.state.map);
      
      window.L.tileLayer(WeatherHelper.getTileUrl(), {
        maxZoom: 18,
        id: 'temp',
        appId: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
        tileSize: 512,
        zoomOffset: -1,
        opacity: 1
      }).addTo(this.state.map);
    }
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.lat !== this.props.lat || prevProps.lon !== this.props.lon) {
      this.state.map.setView([this.props.lat, this.props.lon])
    }
  }
  
  render() {
    return (
      <div id="mapid" style={mapStyles}></div>
    );
  }
}

MapContainer.propTypes = {
  lat: PropTypes.number,
  lon: PropTypes.number
};

export default MapContainer;