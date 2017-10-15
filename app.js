'use strict';
const app = require('express')();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/src/views/testing.html'));
});

app.get('/mock', (req, res) => {
	res.sendFile(path.join(__dirname + '/src/views/mock.html'));
});

app.post('/mock', (req, res) => {
	res.send(req.body.jsonInput);
});

app.listen(3000, () => {
	console.log('Server running on port 3000!');
});
