import ObjectLoader from "../ObjectLoader";

class TestClass {
    constructor() {
        this.name = ''
    }
}

test('Object Loader loads object keys onto A Class', () => {
    let tesObject = {name: 'John'}
    let testCl = new TestClass()
    ObjectLoader.loadFromResponse(testCl, tesObject)
    expect(testCl.name).toStrictEqual(tesObject.name)
});