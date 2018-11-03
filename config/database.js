
const dbURL = "mongodb+srv://admin:admin@cluster0-znwk6.mongodb.net/democsv?retryWrites=true"
const mongoose = require('mongoose');

module.exports = mongoose.connect(dbURL);