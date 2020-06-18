export const WEATHER_ACTIONS = {
    ADD_ITEM: 'ADD_ITEM'
}

class weatherActions {
    static addItem = () => {
        return {
            type: WEATHER_ACTIONS.ADD_ITEM
        };
    };
}

export default weatherActions