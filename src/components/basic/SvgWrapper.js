import React from "react";
import PropTypes from "prop-types";

class SvgWrapper extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg"
           width={this.props.dimensions}
           height={this.props.dimensions}
           className={"clickable-icon " + this.props.class}>
        <use href={this.props.icon}/>
      </svg>
    );
  }
}

SvgWrapper.propTypes = {
  icon: PropTypes.string,
  dimensions: PropTypes.string,
  class: PropTypes.string
};

export default SvgWrapper
