const ava = require('ava')

const createApp = require('../index')

const url = 'localhost'
const serviceName = 'my-beautiful-service'

let bus = {}

ava.before.cb(t => {
	createApp(url, serviceName).then(createdBus => {
		bus = createdBus
		t.end()
	})
})

ava.cb('post a message to a service', t => {
	bus.handleFrom('test-service', msg => {
		console.log(msg)
		t.is(msg.content.toString(), 'pouet')
		t.end()
	})
	bus.post('test-service', 'hello')
})