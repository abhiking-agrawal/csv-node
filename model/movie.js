/** Schema for users */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var movieSchema = new Schema({
    "Release Year": String,
    "Title": String,
    "Origin/Ethnicity": String,
    "Director": String,
    "Cast": String,
    "Genre": String,
    "Wiki Page": String,
    "Plot": String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('movie', movieSchema);