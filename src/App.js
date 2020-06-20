import React from 'react';
import ForecastList from "./components/ForecastList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Favorites from "./components/Favorites";

function App() {
    return (
        <div className="page-layout m-auto pb-2">
            <Header/>
            <SearchBar/>
            <ForecastList/>
            <Favorites/>
        </div>
    );
}

export default App;
