import {WEATHER_ACTIONS} from "./weatherActions";

let initialState = '';

const weather = (state = initialState, action) => {
    switch (action.type) {
        case WEATHER_ACTIONS.ADD_ITEM:
            return state += ' item';
        default:
            return state;
    }
};

export default weather;