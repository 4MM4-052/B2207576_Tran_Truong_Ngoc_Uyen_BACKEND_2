/* eslint-disable no-undef */
const config = {
	app: {
		port: process.env.PORT || 3000,
	},
	db: {
		uri : process.env.MONGOD_URI || "mongodb+srv://Admin:CYPQ1qQARlGYqlpR@cluster1.2usfxb7.mongodb.net/contactbook?retryWrites=true&w=majority"
	}
};

module.exports = config;