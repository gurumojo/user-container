'use strict';

const auth = require('../library/router')();

auth.post('/', (request, response) => {
	response.send({auth: {status: 'OK'}});
});

module.exports = auth;
