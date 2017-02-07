var Ingredient = require('../models/ingredient.js');

exports.findOne = function(name, cb) {
    var query = {'name': name};
    console.log(query);
    Ingredient.findOne(query, function(err, ingredient) {
        if(err) {
            res.send(err);
            cb(true);
        }
        console.log(ingredient);
        cb(null, ingredient);
    });
}

exports.resetData = function(req,res) {
    
    Ingredient.remove("{}", function(err, ingredients) {
        if(err) {
            res.send(err);
        }
        res.send("reset");
    });
    
    
}
