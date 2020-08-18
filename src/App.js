import React, {Component} from 'react';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Favorites from "./components/Favorites";
import CurrentWeather from "./components/CurrentWeather";
import IconSet from "./components/basic/IconSet";
import MapWrapper from "./components/maps/MapWrapper";
import FavoritesContextProvider from "./contexts/FavoritesContext";

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="page-layout m-auto pb-2 px-2">
        <IconSet/>
        <Header/>
        <SearchBar/>
        <FavoritesContextProvider>
          <CurrentWeather/>
        </FavoritesContextProvider>
        <MapWrapper/>
        <FavoritesContextProvider>
          <Favorites/>
        </FavoritesContextProvider>
      </div>
    );
  }
}

export default App;
