const fs = require('fs')
const axios = require('axios')

const COUNTRIES_DESTINATION = './src/assets/json/countries/countries.json'
const CITIES_DESTINATION = './src/assets/json/countries/cities/'

const URL = 'https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.json'

fetchIcons()

function fetchIcons() {
    download(URL, () => {
        console.log(name + ' downloaded')
    })
}

function download(url, cb) {
    let countries = []
    axios.get(url).then((res) => {
        Object.keys(res.data).forEach((key) => {
            countries.push(key)
            let file = fs.createWriteStream(assemblePath(key))
            file.write('{"'+key+'":' + JSON.stringify(res.data[key]) + '}')
            file.on('finish', function () {
                file.close(cb)
            })
        })
        let file = fs.createWriteStream(COUNTRIES_DESTINATION)
        file.write('{"countries":' + JSON.stringify(countries) + '}')
        file.on('finish', function () {
            file.close(cb)
        })
    })
}

function assemblePath(key) {
    return CITIES_DESTINATION + key + '.json'
}
