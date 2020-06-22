import React from "react";
import PropTypes from "prop-types";

class InputDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleActive = this.handleActive.bind(this)
    this.filteredList = this.filteredList.bind(this)
  }

  handleChange(event) {
    if (event.target.value) {
      this.props.onChange(event.target.value)
    } else if (event.currentTarget.dataset.name) {
      this.props.onChange(event.currentTarget.dataset.name)
    } else {
      this.props.onChange(event.target.value)
    }
  }

  handleActive(e) {
    if (this.props.onActive) {
      this.props.onActive(e)
    }
  }

  filteredList() {
    if (!this.props.value) {
      return this.props.list || []
    }
    return this.props.list.filter((item) => {
      let regx = new RegExp("(\\b" + this.props.value + "\\S+\\b)", "ig");
      return item.match(regx);
    })
  }

  render() {
    const listItems = this.filteredList()
    return (
      <div className="input-form mx-2">
        <input type="search" value={this.props.value} onChange={this.handleChange} onClick={this.handleActive}
               placeholder={this.props.placeholder} className={this.props.class}/>
        <ol className="input-dd">
          {listItems.map((item) => {
            return (
              <li key={item} onClick={this.handleChange} data-name={item}>{item}</li>
            )
          })}
        </ol>
      </div>
    );
  }
}

InputDropDown.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  list: PropTypes.array,
  onChange: PropTypes.func,
  onActive: PropTypes.func,
  class: PropTypes.string
};

export default InputDropDown
