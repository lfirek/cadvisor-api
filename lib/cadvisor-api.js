const Promise = require('bluebird');
const restify = require('restify');

function cadvisorApiClient(opts) {
    opts = opts || {};
    
    const rest = Promise.promisifyAll(restify.createJsonClient({
        url: `http://${ opts.hostname || 'localhost'}:${ opts.port || 8080}`,
        version: '*',
        requestTimeout: opts.requestTimeout || 1000,
        connectTimeout: opts.connectTimeout || 1000,
        retry: opts.retry || false,
        log: opts.log,
        headers: opts.headers,
        dtrace: opts.dtrace,
        userAgent: opts.userAgent
    }));

    return {
        getMachineInfo: () => rest.getAsync(`/api/${ opts.version || 'v1.3' }/machine`).then(r => r.res.body).then(JSON.parse),
        getContainerInfo: (request) => rest.getAsync(`/api/${ opts.version || 'v1.3' }/containers/${ request || ''}`).then(r => r.res.body).then(JSON.parse),
        getSubContainerInfo: (request) => rest.getAsync(`/api/${ opts.version || 'v1.3' }/subcontainers/${ request || ''}`).then(r => r.res.body).then(JSON.parse),
        getDockerInfo: (request) => rest.getAsync(`/api/${ opts.version || 'v1.3' }/docker/${ request || ''}`).then(r => r.res.body).then(JSON.parse),
    }
}

module.exports = cadvisorApiClient;