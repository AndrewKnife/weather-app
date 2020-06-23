import historyActions, {HISTORY_ACTIONS} from "../historyActions";

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