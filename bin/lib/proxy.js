const http = require('http')
const httpProxy = require('http-proxy')
module.exports = function (targetUrl, portListen) {
    var options = {
        target: targetUrl
    }
    var proxy = httpProxy.createProxyServer(options);

    http.createServer((req, res) => {
        proxy.web(req, res)
    }).listen(portListen)
}