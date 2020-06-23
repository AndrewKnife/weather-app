import HistoryHelper from "../HistoryHelper";

const TEST_KEY = 'testKey'
const TEST_VALUE = 'testValue'

test('HistoryHelper sets and gets Query props', () => {
    HistoryHelper.setQueryParameter(TEST_KEY, TEST_VALUE)
    expect(HistoryHelper.getQueryParameter(TEST_KEY)).toStrictEqual(TEST_VALUE);
});