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

exports.addIngredient = function(req,res) {
    createIngredient('Wheat', 0, 30, 0, 0, 45, 'grams');
    
    res.send("Ingredient added");
}

exports.resetIngredients = function(req,res) {
    
    Ingredient.remove("{}", function(err, ingredients) {
        if(err) {
            res.send(err);
        }
        res.send("reset");
    });
    
    
}

function createIngredient(name, fats, carbs, sugar, protein, calories, units) {
    var ingredient = new Ingredient({
        name: name,
        fats: fats,
        sugar: sugar,
        protein: protein,
        calories: calories,
        carbs: carbs,
        units: units
    });

    console.log(ingredient);

    ingredient.save(function(err) {
        if(err) {
            console.log(err);
        }
    })
}