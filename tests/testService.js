const createApp = require('../index')

const url = 'localhost'
const serviceName = 'test-service'

createApp(url, serviceName).then(bus => {
	bus.handleFrom('my-beautiful-service', msg => {
		console.log('Message received')
		return msg.content.toString() === 'hello'
			? bus.post('my-beautiful-service', 'pouet')
			: bus.channel.sendToQueue('my-beautiful-service', new Buffer('pouetTwo'))
	})
})