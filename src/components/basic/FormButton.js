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
      <button onClick={this.handleClick}>Search</button>
    );
  }
}

FormButton.propTypes = {
  onClick: PropTypes.func
};

export default FormButton
