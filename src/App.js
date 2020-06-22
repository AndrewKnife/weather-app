import React from 'react';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Favorites from "./components/Favorites";
import CurrentWeather from "./components/CurrentWeather";
import IconSet from "./components/basic/IconSet";

function App() {
    return (
        <div className="page-layout m-auto pb-2">
            <IconSet/>
            <Header/>
            <SearchBar/>
            <CurrentWeather/>
            <Favorites/>
        </div>
    );
}

export default App;
