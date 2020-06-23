import React from "react";
import PropTypes from "prop-types";

class FormButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.onClick(e)
  }

  render() {
    return (
      <button className={'my-2 ' + this.props.class} onClick={this.handleClick}>{this.props.label}</button>
    );
  }
}

FormButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  class: PropTypes.string
};

export default FormButton
