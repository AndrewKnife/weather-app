import React from 'react';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Favorites from "./components/Favorites";
import CurrentWeather from "./components/CurrentWeather";

function App() {
    return (
        <div className="page-layout m-auto pb-2">
            <Header/>
            <SearchBar/>
            <CurrentWeather/>
            <Favorites/>
        </div>
    );
}

export default App;
