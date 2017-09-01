var redbird = require('redbird')
module.exports = function (targetUrl, portListen) {
    var proxy = redbird({port: portListen});
    proxy.register('localhost/', targetUrl)
}


