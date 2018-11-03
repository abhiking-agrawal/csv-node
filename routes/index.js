const express = require('express'),
    router = express.Router(),
    fileO = require('../controller/fileOperation'),
    dataOps = require('../controller/dataOperation')

// Upload CSV file
router.route('/upload').post(fileO.fileUpload,fileO.saveToDatabase);

// Signup route for a user
router.route('/data')
        .get(dataOps.getDataList)
        .post(dataOps.saveEntry);

router.route('/data/:id')
        .get(dataOps.getDetailsbyId)
        .delete(dataOps.deleteEntryById)
        .put(dataOps.updateEntry);

module.exports = router;