var express = require('express');
var router = express.Router();

// Modal import
var Model = require('../Model/UserImgModel');

// user index image upload
router.post('/upload', (req, res) => {
  let { image } = req.body;

  var savedata = new Model({
    'userId': "userId" + Math.floor(Date.now() / 1000),
    'image': image
  }).save(function (err, result) {
    if (err) throw err;

    if (result) {
      res.json(result)
    }
  })
});

module.exports = router;