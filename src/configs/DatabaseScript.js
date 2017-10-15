'use strict';
const mysql = require('mysql');

const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: ''
});

con.connect((err) => {
	if (err) {
		throw err;
	}

	const createDbQuery = `CREATE DATABASE IF NOT EXISTS apitools`;

	con.query(createDbQuery, (err) => {
		if (err) {
			throw err;
		}
		console.log("Successfully created database!");		
	});

	con.end();
});
