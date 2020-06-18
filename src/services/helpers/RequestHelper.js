const getAxios = () => import('axios')

class RequestHelper {
    constructor () {
        if (!RequestHelper.Singleton) {
            RequestHelper.Singleton = this
        }
        return RequestHelper.Singleton
    }

    sendPostRequest (url, requestData) {
        return getAxios().then(
            axios => {
                return axios.post(url, requestData)
            }
        )
    }

    sendGetRequest (url, requestData = {}, headers = null) {
        return getAxios().then(
            axios => {
                return axios.get(url, {params: requestData, ...headers})
            }
        )
    }
}

export default new RequestHelper()
