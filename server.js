'use strict';

const Hapi = require('@hapi/hapi');
const Path = require('path');
const Inert = require('@hapi/inert');

exports.init = async (opts) => {


    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'dist')
            }
        }
    });

    await server.register(Inert);

    require('./routes')(server);

    // $lab:coverage:off$
    if (opts.start) {
        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
    }

    if (opts.test) {
        await server.initialize();
    }

    return server;
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

// $lab:coverage:on$

