'use strict';

const user = require('../library/router')();

user.post('/', (request, response) => {
	response.send({user: Object.assign({id: 0}, request.body)});
});

user.get('/', (request, response) => {
	response.send({users: [{id:0}, {id:1}]});
});

user.get('/:id', (request, response) => {
	response.send({user: {id: +request.params.id}});
});

module.exports = user;
