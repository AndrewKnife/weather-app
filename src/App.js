import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import weatherActions from "./store/weather/weatherActions";

function App() {
    const data = useSelector(state => state.weather)
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
                    {data}
                </a>
                <button onClick={() => dispatch(weatherActions.addItem())}>add</button>
            </header>
        </div>
    );
}

export default App;
