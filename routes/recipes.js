var express = require('express');

var recipesDao = require('../services/recipesDao');

var router = express.Router();

router.get('/', function(req, res, next) {

  var filter = req.param("filter");
  console.log("Filter: " + filter);
  if(filter == null) {
    recipesDao.findAll(req,res);
  } else {
    recipesDao.findFiltered(filter, req,res);
  }


});
router.get('/testdata', function(req, res, next) {
  recipesDao.testData(req,res);
});

module.exports = router;