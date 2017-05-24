const createApp = require('../index')

const url = 'localhost'
const serviceName = 'test-service'

createApp(url, serviceName).then(bus => {
	bus.handleFrom('my-beautiful-service', msg => {
		console.log('Message received')
		bus.post('my-beautiful-service', 'pouet')
	})
})