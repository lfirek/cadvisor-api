# Cadvisor API Client

It's easy to use HTTP Client for any version of [Cadvisor API](https://github.com/google/cadvisor/blob/master/docs/api.md) (default : 1.3)

Cadvisor Api Client using :
- [bluebird](https://www.npmjs.com/package/bluebird)
- [restify](https://www.npmjs.com/package/restify)

## Usage

### Cadvisor Api Parameters

- hostname (ex. localhost)
- port (ex. 8080)
- requestTimeout amount of time to wait for the request to finish
- connectTimeout amount of time to wait for a socket
- retry options to provide to node-retry;"false" disables retry; defaults to 4 retries
- log bunyan instance
- headers HTTP headers to set in all requests
- dtrace node-dtrace-provider handle
- userAgent user-agent string to use

### Get Cadvisor Machine Info

```javascript
const cadvisor = require('cadvisor-api')();

cadvisor.getMachineInfo().then(function(machineInfo){
    // ...show or parse your data
}).catch(function(exceptionData){
   // ...show or parse error
});
```

or

```javascript
const cadvisor = require('cadvisor-api')({
    hostname:'localhost',
    port:8080,
    requestTimeout: 1000,
    connectTimeout: 1000,
});

cadvisor.getMachineInfo().then(function(machineInfo){
    // ...show or parse your data
}).catch(function(exceptionData){
   // ...show or parse error
});
```

### Get Cadvisor Container Info

```javascript
const cadvisor = require('cadvisor-api')();

cadvisor.getContainerInfo().then(function(machineInfo){
    // ...show or parse your data
}).catch(function(exceptionData){
   // ...show or parse error
});
```

or

```javascript
const cadvisor = require('cadvisor-api')();

cadvisor.getContainerInfo('data-container').then(function(machineInfo){
    // ...show or parse your data
}).catch(function(exceptionData){
   // ...show or parse error
});
```

### Get Cadvisor SubContainer Info

```javascript
const cadvisor = require('cadvisor-api')();

cadvisor.getSubContainerInfo().then(function(machineInfo){
    // ...show or parse your data
}).catch(function(exceptionData){
   // ...show or parse error
});
```

or

```javascript
const cadvisor = require('cadvisor-api')();

cadvisor.getSubContainerInfo('data-subcontainer').then(function(machineInfo){
    // ...show or parse your data
}).catch(function(exceptionData){
   // ...show or parse error
});
```

### Get Cadvisor Docker Info

```javascript
const cadvisor = require('cadvisor-api')();

cadvisor.getDockerInfo().then(function(machineInfo){
    // ...show or parse your data
}).catch(function(exceptionData){
   // ...show or parse error
});
```

or

```javascript
const cadvisor = require('cadvisor-api')();

cadvisor.getDockerInfo('cadvisor').then(function(machineInfo){
    // ...show or parse your data
}).catch(function(exceptionData){
   // ...show or parse error
});
```