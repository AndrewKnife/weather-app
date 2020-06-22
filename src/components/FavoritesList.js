import React, {Component} from "react";
import weatherActions from "../store/weather/weatherActions";
import {connect} from 'react-redux'
import ForecastCard from "./ForecastCard";

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
    return (
      <div>
        {this.filterList().map((item, i) => {
          return (<ForecastCard key={i} forecast={item}/>)
        })}
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
