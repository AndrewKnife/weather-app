import React from 'react';
import {useDispatch} from "react-redux";
import locationActions from "./store/location/locationActions";
import ForecastList from "./components/ForecastList";

function App() {
    const dispatch = useDispatch()
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link"
                   href="https://reactjs.org"
                   target="_blank"
                   rel="noopener noreferrer">
                    nice
                </a>
                {/*<button onClick={() => dispatch(locationActions.getAddress('5', '6'))}>add</button>*/}
                <ForecastList/>
            </header>
        </div>
    );
}

export default App;
