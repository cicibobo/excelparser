const mongoose = require('mongoose');
const router = require('express').Router();
const auth = require('../auth');
var path = require('path');
var excelParser = require('excel-parser');
var xlsx = require('node-xlsx');

router.post('/', (req, res, next) => {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  let file = req.files.files;

  file.mv(path.dirname(require.main.filename) + '/files/' + file.name, function(
    err
  ) {
    if (err) return res.status(500).send(err);
    const workSheetsFromFile = xlsx.parse(
      path.dirname(require.main.filename) + '/files/' + file.name
    );
    res.json(workSheetsFromFile);
  });
});

module.exports = router;
