var express = require('express');
var async = require('async');
var ingredientsDao = require('../services/ingredientsDao');

var router = express.Router();

router.get('/add', function (req, res, next) {
  ingredientsDao.addIngredient(req, res);
});
router.get('/reset', function (req, res, next) {
  ingredientsDao.resetIngredients(req, res);
});

module.exports = router;