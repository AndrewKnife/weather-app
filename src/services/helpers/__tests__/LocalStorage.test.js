import LocalStorage from "../LocalStorage";

let testItem = [
    {id: '1', name: 'one'},
    {id: '2', name: 'two'},
    {id: '3', name: 'three'},
]

const TEST_KEY = 'testKey'

LocalStorage.saveToStorage(TEST_KEY, testItem)

test('Saves To local storage and gets from it', () => {
    expect(LocalStorage.getDataByKey(TEST_KEY)).toStrictEqual(testItem);
});

test('Saves To local Object array without duplicates', () => {
    LocalStorage.saveToObjectArrayByIdKey(TEST_KEY, {id: '4', name: 'four'}, 'id')
    LocalStorage.saveToObjectArrayByIdKey(TEST_KEY, {id: '4', name: 'four'}, 'id')
    testItem.push({id: '4', name: 'four'})
    expect(LocalStorage.getDataByKey(TEST_KEY)).toStrictEqual(testItem);
});

test('Removes from local Object array', () => {
    let testRemoval = [
        {id: '1', name: 'one'},
        {id: '2', name: 'two'},
        {id: '3', name: 'three'},
    ]
    LocalStorage.saveToObjectArrayByIdKey(TEST_KEY, {id: '4', name: 'four'}, 'id')
    LocalStorage.removeFromObjectArrayByIdKey(TEST_KEY, 'id', '4')
    expect(LocalStorage.getDataByKey(TEST_KEY)).toStrictEqual(testRemoval);
});

