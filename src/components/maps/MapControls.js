import React, {Component} from 'react'
import SvgWrapper from "../basic/SvgWrapper";
import PropTypes from "prop-types";
import MapContainer from "./MapContainer";
import {WEATHER_LAYER} from "../../services/GlobalConstants";

export class MapControls extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this)
  }
  
  onClick(e) {
    this.props.onClick(e.currentTarget.dataset.id)
  }
  
  render() {
    return (
      <div className="col-12 m-auto mb-4 d-flex justify-center">
        {Object.keys(WEATHER_LAYER).map((key) => {
          let name = WEATHER_LAYER[key].name
          let icon = WEATHER_LAYER[key].icon
          return (
            <button className={'weather-button button-clear m-3' + (this.props.selectedLayer === name ? ' active' : '')}
                    data-id={name} onClick={this.onClick} key={name} >
              <SvgWrapper icon={icon} dimensions="52px" class="f-gray"/>
            </button>
          )
        })}
      </div>
    );
  }
}

MapContainer.propTypes = {
  selectedLayer: PropTypes.string,
  onClick: PropTypes.func
};

export default (MapControls)
