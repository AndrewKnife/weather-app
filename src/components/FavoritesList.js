import React, {Component} from "react";
import weatherActions from "../store/weather/weatherActions";
import {connect} from 'react-redux'
import ForecastCard from "./ForecastCard";
import TranslationsHelper from "../services/helpers/TranslationsHelper";

class FavoritesList extends Component {
  constructor(props) {
    super(props);
    this.filterList = this.filterList.bind(this)
  }

  filterList() {
    return this.props.weather.favorites.filter((item) => {
      return !this.props.weather.current || item.name !== this.props.weather.current.name
    })
  }

  componentDidMount() {
    this.props.loadFavorites()
  }

  render() {
    const hasItems = this.filterList().length > 0
    let message = null
    if (!hasItems) {
      message = <span>{TranslationsHelper.translate('no-favorites-message')}</span>
    }

    return (
      <div>
        {this.filterList().map((item, i) => {
          return (<ForecastCard key={i} forecast={item}/>)
        })}
        {message}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadFavorites: () => {
      dispatch(weatherActions.loadFavorites())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList)
