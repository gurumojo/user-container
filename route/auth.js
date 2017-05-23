'use strict';

const auth = require('express')();

require('../config')(auth);

auth.post('/', (request, response) => {
	response.send({auth: 'OK'});
});

module.exports = auth;
