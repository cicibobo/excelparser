const express = require('express');
const router = express.Router();

router.use('/api', require('./api'));
router.use('/upload', require('./files-upload'));


module.exports = router;