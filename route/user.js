'use strict';

const user = require('express')();

require('../config')(user);

user.post('/', (request, response) => {
	response.send({user: request.body});
});

user.get('/', (request, response) => {
	response.send([{id:0},{id:1}]);
});

user.get('/:id', (request, response) => {
	response.send({id: +request.params.id});
});

module.exports = user;
