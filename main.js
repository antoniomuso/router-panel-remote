#!/usr/bin/env node

const commandLine = require('command-line-args')
const proxy = require('./bin/lib/proxy.js')

const optionDefinitions = [
    { name:'serverMode',type: Boolean, defaultValue: false},
    { name: 'router', alias: 'r', type: String , defaultValue: 'http://192.168.1.1' },
    { name: 'server', alias: 's',type: String },
    { name: 'clientPort', alias: 'p', type:Number, defaultValue: 4400 },
    { name: 'serverPort', type: Number }
  ]

const options = commandLine(optionDefinitions)


if (options.serverMode) {
    if (!options.serverPort) throw new Error('--serverPort must be specifie')
    proxy(options.router, options.serverPort)   
    console.log('server mode active')
} else {
    if (!options.serverPort) throw new Error('--serverPort must be specifie')
    if (!options.server) throw new Error('In not server mode the ip of server must be specifie')
    proxy(options.server +`:${options.serverPort}` ,options.clientPort)
}
