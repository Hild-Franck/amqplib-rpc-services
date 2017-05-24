const emitter = new (require('ev-emitter'))()

const handlers = {
	post: msg => emitter.emitEvent(msg.properties.appId, [msg]),
	default: msg => console.log(`New message: ${msg}`)
}

const consumeService = bus => {
	bus.channel.consume(bus.serviceName, msg => {
		const type = msg.properties.type
// use the handler associated with the type or the default handler
		return (handlers[type] || handlers.default)(msg)
	})

	bus.setDefaultHandler = callback => (handlers.default = callback)

// msg must be a string (no type check yet)
	bus.post = (queue, msg) => bus.channel.sendToQueue(queue, new Buffer(msg), {
		type: 'post',
		appId: bus.serviceName
	})

// callback function have the message received as parameter
	bus.handleFrom = (service, callback) => emitter.on(service, callback)

	return bus
}

module.exports = consumeService