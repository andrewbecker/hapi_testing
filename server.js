'use strict';

const Hapi = require('hapi');
const Vision = require('vision');
const Handlebars = require('handlebars');
const base_routes = require('./routes/base_routes');
const inert = require('inert');

const server = new Hapi.Server();
server.connection({ 
	host: 'localhost',
	port: 3000 
});

// Register vision to get access to server.views
server.register(Vision, function (err) {
	if (err) { console.log('Cannot register vision'); }

	// template support
	server.views({
		engines: {
			html: Handlebars
		},
		path: 'views',
		layoutPath: 'views/layout',
		layout: 'default'
	});
});

// Register js scripts
server.register(require('inert'), (err) => {
	if (err) { throw err; }

	server.route({
		method: 'GET',
		path: '/{file*}',
		handler: {
			directory: {
				path: 'public'
			}
		}
	});
});

// Load routes
server.route(base_routes);


server.start((err) => {

	if (err) {
		throw err;
	}

	console.log(`Server running at: ${server.info.uri}`);

});