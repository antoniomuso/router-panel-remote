const commandLine = require('command-line-args')
const proxy = require('./bin/lib/proxy.js')

const optionDefinitions = [
    { name:'serverMode',type: Boolean, defaultValue: false},
    { name: 'router', alias: 'r', type: String , defaultValue: 'http://192.168.1.1' },
    { name: 'server', alias: 's',type: String },
    { name: 'clientPort', alias: 'p', type:Number, defaultValue: 4400 }
  ]

const options = commandLine(optionDefinitions)


if (options.serverMode) {
    proxy(options.router, 5656)
} else {
    if (!options.server) throw new Error('In not server mode the ip of server must be specifie')
    proxy(options.server +':5656' ,options.clientPort)
}
