import RequestHelper from "../RequestHelper";
import {REQUEST_URL} from "../../GlobalConstants";

var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

describe('RequestHelper', () => {
    it('returns data when sendGetRequest is called', done => {
        var mock = new MockAdapter(axios);
        const data = { response: true };
        mock.onGet(REQUEST_URL.WEATHER).reply(200, data);

        RequestHelper.sendGetRequest(REQUEST_URL.WEATHER).then(response => {
            expect(response.data).toEqual(data);
            done();
        });
    });
});