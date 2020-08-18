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
    this.state = {
      favs: []
    }
    this.filterList = this.filterList.bind(this)
    this.fetchFavoriteCities = this.fetchFavoriteCities.bind(this)
  }

  componentDidMount() {
    this.fetchFavoriteCities()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.favs.length !== this.props.weather.favorites.length) {
      this.setState({
        favs: this.props.weather.favorites
      })
    }
  }

  fetchFavoriteCities(){
    let savedFavorites = LocalStorage.getDataByKey(STORAGE_KEY.FAVORITES) || []
    for (let favorite of savedFavorites) {
      WeatherHelper.loadForecast(favorite.lat, favorite.lon).then((res) => {
        this.props.addFavorite(res)
      })
    }
  }

  filterList() {
    return this.state.favs.filter((item) => {
      return !this.props.weather.current || item.name !== this.props.weather.current.name
    })
  }

  render() {
    const hasItems = this.state.favs.length > 0
    let message = null
    if (!hasItems) {
      message = <span>{TranslationsHelper.translate('no-favorites-message')}</span>
    }

    return (
      <div>
        {this.filterList().map((item) => {
          return (<ForecastCard key={item.name} forecast={item}/>)
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
    addFavorite: (favorite) => {
      dispatch(weatherActions.addFavorite(favorite))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList)
