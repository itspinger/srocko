/*
 *  Copyright(c) 2022 recnik.io
 *  All rights reserved.
*/

// Import lodash for merging configs
const _ = require('lodash');

// Config files
const localConfig = require('../config.json');
const defaultConfig = localConfig.development;

process.argv.forEach(arg => {
    // Check if the arg contains the environment
    if (!arg.startsWith("environment=")) {
        global.gConfig = defaultConfig;
        return;
    }

    const env = arg.replace("environment=", "") || 'development';
    const envConfig = localConfig[env];

    // Set the global config
    global.gConfig = _.merge(localConfig, envConfig);
});

// Server imports
const app = require('../app');
const http = require('http');

// Create a server
const server = http.createServer(app);
if (global.gConfig.production) {
    console.log("RUNNING IN PRODUCTION MODE!!!");
}

// Listen to the connection
server.listen(global.gConfig.node_port, () => {
    console.log('Listening to the port: ' + global.gConfig.node_port);
})