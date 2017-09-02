const url = require('url')

module.exports = function (targetUrl, portListen) {
    var urlParse = url.parse(targetUrl) 
    if (urlParse.protocol === 'https:') {
        require('./proxy-https.js')(targetUrl, portListen)
    } else if (urlParse.protocol === 'http:') {
        require('./proxy-http.js')(targetUrl, portListen)
    }
}