# router-panel-remote
Thanks to this application you can access to control panel of your router in remote.

## How to install
`npm install router-panel-remote -g`
## Use application
```
On cliente:
  router-panel-remote --server [Ip server] --serverPort [port of server] --clientPort [default 4400]
  
On server:
  router-panel-remote --serverMode --serverPort [port of server] --router [ip of router default 'http://192.168.1.1']
```

### Example
```
On Server: 
  router-panel-remote --serverMode --serverPort 5000
  
On Cliente:
  sudo router-panel-remote --server http://server.com --serverPort 5000 --clientPort 80
  
  
After this commands the page http://localhost contain router panel
```


