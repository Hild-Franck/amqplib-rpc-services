const connect = require('./connect')

const appendApp = (channel, serviceName, consumedServices) =>
	(store => {
		store.channel = channel
		store.serviceName = serviceName
		store.consumedServices = consumedServices

		return channel.assertQueue('').then(appQueue => {
			store.appQueue = appQueue
			return channel.assertQueue(serviceName)
		}).then(serviceQueue => {
			store.serviceQueue = serviceQueue
			return store
		})
	})({})

	module.exports = appendApp