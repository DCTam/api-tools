'use strict';
const app = require('express')();
const path = require('path');

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/src/views/testing.html'));
});

app.listen(3000, () => {
	console.log('Server running on port 3000!');
});
