const ava = require('ava')

const connect = require('../src/connect')

const fakeUrl = 'chickenHost'
const url = 'localhost'

ava.cb('connection to broker', t => {
	connect(url).then(channel => {
		t.pass()
		t.end()
	}).catch(err => {
		console.log(err)
		t.fail()
		t.end()
	})
})