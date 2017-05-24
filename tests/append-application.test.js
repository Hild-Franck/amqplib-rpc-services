const ava = require('ava')

const connect = require('../src/connect')
const appendApp = require('../src/appendApp')

const url = 'localhost'

ava.cb('Append app', t => {
	connect(url).then(channel => appendApp(channel, 'service-test', []))
		.then(bus => {
			t.pass()
			console.log(bus)
			t.end()
		}).catch(err => {
			t.fail()
			console.log(err)
			t.end()
		})
})