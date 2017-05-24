const connect = require('./src/connect')
const appendApp = require('./src/appendApp')

const createApp = (url, serviceName, consumedServices) =>
	connect(url).then(channel => appendApp(channel, serviceName, consumedServices))

module.exports = createApp