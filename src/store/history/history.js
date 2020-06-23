import {HISTORY_ACTIONS} from "./historyActions";
import HistoryHelper from "../../services/helpers/HistoryHelper";

const SEARCH_QUERY_KEY = 'q'

let initialState = HistoryHelper.getQueryParameter(SEARCH_QUERY_KEY);

const history = (state = initialState, action) => {
  switch (action.type) {
    case HISTORY_ACTIONS.UPDATE_HISTORY:
      HistoryHelper.setQueryParameter(SEARCH_QUERY_KEY, action.query || null)
      return action.query
    default:
      return state
  }
};

export default history;