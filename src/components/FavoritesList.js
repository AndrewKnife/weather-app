import React, {Component} from "react";
import weatherActions from "../store/weather/weatherActions";
import {connect} from 'react-redux'
import ForecastCard from "./ForecastCard";
import TranslationsHelper from "../services/helpers/TranslationsHelper";
import LocalStorage from "../services/helpers/LocalStorage";
import {STORAGE_KEY} from "../services/GlobalConstants";
import WeatherHelper from "../services/api/WeatherHelper";

class FavoritesList extends Component {
  constructor(props) {
    super(props);
    this.filterList = this.filterList.bind(this)
    this.fetchFavoriteCities = this.fetchFavoriteCities.bind(this)
  }

  componentDidMount() {
    this.fetchFavoriteCities()
  }

  fetchFavoriteCities(){
    let savedFavorites = LocalStorage.getDataByKey(STORAGE_KEY.FAVORITES) || []
    let favorites = []
    for (let favorite of savedFavorites) {
      WeatherHelper.loadForecast(favorite.lat, favorite.lon).then((res) => {
        favorites.push(res)
      })
    }
    this.props.loadFavorites(favorites)
  }

  filterList() {
    return this.props.weather.favorites.filter((item) => {
      return !this.props.weather.current || item.name !== this.props.weather.current.name
    })
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
    loadFavorites: (favorites) => {
      dispatch(weatherActions.loadFavorites(favorites))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList)
