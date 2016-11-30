'use strict';

const Code = require('code');
const Hapi = require('hapi');
const Lab = require('lab');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const server = require('../server/server.js').createServer(3000);

describe('server stuff', () => {

	it ('should start', (done) => {
		let options = {
			url: '/',
			method: 'GET'
		};
		server.inject(options, function(response) {
			expect(response.statusCode).to.equal(200);
			done();
		});
	});
});