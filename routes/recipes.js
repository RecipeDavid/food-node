var express = require('express');
var async = require('async');
var recipesDao = require('../services/recipesDao');

var router = express.Router();

router.get('/', function (req, res, next) {

  var filter = req.param("filter");
  console.log("Filter: " + filter);

  async.waterfall([
    function (cb) {
      if (filter == null) {
        recipesDao.findAll(cb);
      } else {
        recipesDao.findFiltered(filter, cb);
      }
    }
  ], function (err, recipes) {
    res.render('recipes', {
      title: 'Express',
      recipes: recipes
    });
  });
});


router.get('/recipe/:id', function (req, res, next) {
  var id = req.param("id");
  console.log("id: " + id);


  async.waterfall([
    function (cb) {
      recipesDao.findOne(id, cb);
    }
  ], function (err, recipe) {
    res.render('recipe', {
      title: 'Express',
      recipe: recipe
    });
  });
});


router.get('/testdata', function (req, res, next) {
  recipesDao.testData(req, res);
});
router.get('/resetdata', function (req, res, next) {
  recipesDao.resetData(req, res);
});

module.exports = router;