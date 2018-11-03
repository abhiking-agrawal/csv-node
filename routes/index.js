const express = require('express'),
    router = express.Router(),
    fileO = require('../controller/fileOperation'),
    dataOps = require('../controller/dataOperations')

// Upload CSV file
router.route('/upload').post(fileO.fileUpload,fileO.saveToDatabase);

// Signup route for a user
router.route('/data')
        .get(dataOps.getDataList)
        .put(dataOps.saveOrUpdateEntry)
        .post(dataOps.saveOrUpdateEntry);

router.route('/data/:id')
        .get(dataOps.getDetailsbyId)
        .delete(dataOps.deleteEntryById);

module.exports = router;