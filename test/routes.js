'use strict';

const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');

const { afterEach, beforeEach, describe, it } = exports.lab = Lab.script();
const Server  = require('../server');

describe('GET /', () => {

    let server;

    beforeEach(async () => {

        server = await Server.init({ test: true });
    });

    afterEach(async () => {

        await server.stop();
    });

    it('responds with 200 and Hello World!', async () => {

        const res = await server.inject({
            method: 'get',
            url: '/'
        });
        expect(res.statusCode).to.equal(200);
        expect(res.payload).to.equal('Hello World!');
    });
});
