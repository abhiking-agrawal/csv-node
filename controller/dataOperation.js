
const Movie = require('../model/movie.js');

/**
 * Get the list of all records
 */
var getDataList = function (req, res) {
    Movie.find({}, '-__ve')
        .exec(function (err, movies) {
            if (err) {
                return res.status(500).json({ message: "Something went wrong" });
            }
            return res.status(200).json({ message: "Data retrieved successfully", data: movies });

        });
};
module.exports.getDataList = getDataList;

/**
 * Save New Entry
 */
var saveEntry = function (req, res) {
    if (req && !req.body) {
        return res.status(500).json({ data: req.body, message: "Please provide proper input" });
    }
    var movie = new Movie(req.body);
    movie.save(function (err) {
        if (err) {/*
                  console.log(err)*/
            return res.status(500).json({ message: err });
        } else {
            // Remove sensitive data before login
            res.status(200).json({ message: "Record inserted succeessfully" });
        }
    });

};
module.exports.saveEntry = saveEntry;

/**
 * Get the record details by id
 */
var getDetailsbyId = function (req, res) {
    if (req && (!req.params || !req.params.id)) {
        return res.status(500).json({ message: "Please provide proper input" });
    }
    Movie.find({
        _id: req.params.id
    }, '-__ve')
        .exec(function (err, movie) {
            if (err) {
                return res.status(500).json({ message: "Something went wrong" });
            }
            return res.status(200).json({ message: "Data retrieved successfully", data: movie });

        });
};
module.exports.getDetailsbyId = getDetailsbyId;

/**
 * Update the record
 */
var updateEntry = function (req, res) {
    if (req && (!req.params || !req.params.id)) {
        return res.status(500).json({ message: "Please provide proper input" });
    }
    Movie.update({_id : req.params.id},
        {
            "Release Year": req.body["Release Year"],
            "Title": req.body["Title"],
            "Origin/Ethnicity": req.body["Origin/Ethnicity"],
            "Director": req.body["Director"],
            "Cast": req.body["Cast"],
            "Genre": req.body["Genre"],
            "Wiki Page": req.body["Wiki Page"],
            "Plot": req.body["Plot"]
        },
        {new: true},
        function (err, user) {
            if (err || !user)
                return res.status(400).send('Something went wrong')
            res.status(200).json({ message: "Updated Successfully" })
        })

};
module.exports.updateEntry = updateEntry;


/**
 * Delete the record
 */
var deleteEntryById = function (req, res) {
    if (req && (!req.params || !req.params.id)) {
        return res.status(500).json({ message: "Please provide proper input" });
    }
    Movie.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            return res.status(500).json({ message: "Something went wrong" });
        }
        return res.status(200).json({ message: "Data deleted successfully" });
    });

};
module.exports.deleteEntryById = deleteEntryById;