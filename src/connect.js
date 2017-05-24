const amqp = require('amqplib')

const connect = url => amqp.connect(`amqp://${url}`)
	.then(connection => connection.createChannel())

module.exports = connect