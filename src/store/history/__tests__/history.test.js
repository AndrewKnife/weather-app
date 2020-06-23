import historyActions, {HISTORY_ACTIONS} from "../historyActions";
import history from "../history";

describe('history actions', () => {
  it('action to update history', () => {
    const query = 'q'
    const expectedAction = {
      type: HISTORY_ACTIONS.UPDATE_HISTORY,
      query
    }
    expect(historyActions.updateHistory('q')).toEqual(expectedAction)
  })
})

describe('history reducer', () => {
  it('should return the initial state', () => {
    expect(history(undefined, {})).toEqual(null)
  })

  it('should handle UPDATE_HISTORY', () => {
    expect(
      history([], {
        type: HISTORY_ACTIONS.UPDATE_HISTORY,
        query: 'string'
      })
    ).toEqual("string")
  })
})