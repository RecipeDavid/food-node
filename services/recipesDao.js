var Recipe = require('../models/recipe.js');

exports.findAll = function(req, res) {
    Recipe.find(function(err, recipes) {
        if(err) {
            res.send(err);
        }
        //res.send(recipes);
        res.render('recipes', { title: 'Express', recipes: recipes });
    });
}
exports.findFiltered = function(filter, req, res) {
    console.log("filtered: " + filter)
    var query = {'ingredients.name':{'$ne': filter}};
    console.log(query);
    Recipe.find(query, function(err, recipes) {
        if(err) {
            res.send(err);
        }
        //res.send(recipes);
        res.render('recipes', { title: 'Express', recipes: recipes });
    });
}

exports.testData = function(req,res) {
    createTestData('Chicken and chips','sugar');
    createTestData('Generic Meat Pie','milk');
    
    res.send("triggered");
}


function createTestData(name, ingredient) {
    var recipe = new Recipe({
        name: name,
        ingredients: [
            {name: ingredient, measure: 'cups', amount: 3},
            {name: 'bread', measure: 'unit', amount: 3},
            {name: 'butter', measure: 'grams', amount: 3}
        ],
        prepTime: 10,
        cookTime: 50,
        servingsMin: 2,
        servingsMax: 3,
        steps: [
            {no: 1, text: 'Do some stuff', imageUrl: null},
            {no: 2, text: 'Do something else', imageUrl: null},
            {no: 3, text: 'Throw it on the floor', imageUrl: null}
        ],
        preferences: ['low_carb'],
        occasion: ['breakfast'],
        source: 'BBC Good Food',
        sourceUrl: 'http://www.bbc.co.uk/good-recipe',
        submittedBy: 'Dan',
        approve: true,
        imageUrl: null
    });

    console.log(recipe);

    recipe.save(function(err) {
        if(err) {
            console.log(err);
        }
    })
}