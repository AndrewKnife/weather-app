export const HISTORY_ACTIONS = {
  UPDATE_HISTORY: 'UPDATE_HISTORY',
}

class historyActions {
  static updateHistory = (query) => {
    return {
      type: HISTORY_ACTIONS.UPDATE_HISTORY,
      query
    };
  };
}

export default historyActions