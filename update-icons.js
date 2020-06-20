const https = require('https')
const fs = require('fs')

const DESTINATION = './src/assets/images/weather/'

const URL = 'https://openweathermap.org/img/wn/%s@2x.png'

const ICON_LIST = ['01d', '02d', '03d', '04d', '09d', '10d', '11d', '13d', '50d']

fetchIcons()

function fetchIcons () {
    ICON_LIST.forEach((name) => {
        download(assembleUrl(name), assemblePath(name), () => {
            console.log(name + ' downloaded')
        })
    })
}

function download (url, dest, cb) {
    let file = fs.createWriteStream(dest)
    https.get(url, function (response) {
        response.pipe(file)
        file.on('finish', function () {
            file.close(cb)
        })
    })
}

function assembleUrl (key) {
    return URL.replace('%s', key)
}

function assemblePath (key) {
    return DESTINATION + key + '.png'
}
