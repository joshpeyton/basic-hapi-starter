'use strict';

module.exports = function (server) {

    server.route({
        method: 'GET',
        path: '/',
        handler: function () {

            return 'Hello World!';
        }
    });
};
