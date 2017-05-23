'use strict';

const bodyParser = require('body-parser');

const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}.json`);

const EXPRESS_HOST = process.env.EXPRESS_HOST || 'api';


function configuration(request, response, next) {
	request.config = config;
	next();
}

module.exports = router => {
	router.disable('etag');
	router.disable('x-powered-by');
	router.use(bodyParser.json());
	router.use(configuration);
};
