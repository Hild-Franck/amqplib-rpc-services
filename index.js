const connect = require('./src/connect')
const appendApp = require('./src/appendApp')
const consumeService = require('./src/consumeService')

const createApp = (url, serviceName) =>
	connect(url)
		.then(channel => appendApp(channel, serviceName))
		.then(consumeService)

module.exports = createApp