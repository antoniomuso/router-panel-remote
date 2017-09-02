const http = require('http')
const https = require('https')
const httpProxy = require('http-proxy')
module.exports = function (targetUrl, portListen) {
    var options = {
        target: targetUrl,
        agent: https.globalAgent,
        ws: true
    }
    var proxy = httpProxy.createProxyServer(options);

    http.createServer((req, res) => {
        proxy.web(req, res)
    }).listen(portListen)
}

