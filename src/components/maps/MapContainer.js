import React, {Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import PropTypes from 'prop-types';

const wrapperStyles = {
  height: '400px'
};

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <div style={wrapperStyles}>
        <Map
          google={this.props.google}
          key={this.props.lat}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lon
          }}
          draggableCursor={'auto'}
          draggable={false}
          disableDoubleClickZoom
          disableDefaultUI/>
      </div>
    );
  }
}

MapContainer.propTypes = {
  lat: PropTypes.number,
  lon: PropTypes.number
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);