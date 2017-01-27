var Recipe = require('../models/recipe.js');

exports.findOne = function(id, req, res) {
    var query = {'_id': id};
    console.log(query);
    Recipe.findOne(query, function(err, recipe) {
        if(err) {
            res.send(err);
        }
        console.log(recipe);
        res.render('recipe', { title: 'Express', recipe: recipe });
    });
}

exports.findAll = function(req, res) {
    Recipe.find(function(err, recipes) {
        if(err) {
            res.send(err);
        }
        //res.send(recipes);
        console.log("--- recipes --- START")
        console.log(recipes);
        console.log("--- recipes --- START")
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
    createTestData('Something Frosted','Sugar','/images/image-test-1.jpg', 120);
    createTestData('Some Soup','Milk','/images/image-test-2.jpg', 300);
    createTestData('Noodles','Wheat','/images/noodles-image.jpg', 98);
    
    res.send("triggered");
}
exports.resetData = function(req,res) {
    
    Recipe.remove("{}", function(err, recipes) {
        if(err) {
            res.send(err);
        }
        //res.send(recipes);
        res.send("reset");
    });
    
    
}


function createTestData(name, ingredient, url, likes) {
    var recipe = new Recipe({
        name: name,
        ingredients: [
            {name: ingredient, measure: 'cups', amount: 3, iconUrl: '/icons/icon-test.png'},
            {name: 'salt', measure: 'tsp', amount: 2, iconUrl: '/icons/icon-test.png'},
            {name: 'butter', measure: 'grams', amount: 3, iconUrl: '/icons/icon-test.png'},
            {name: 'eggs', measure: 'unit', amount: 2, iconUrl: '/icons/icon-test.png'}
        ],
        likes: likes,
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
        imageUrl: url
    });

    console.log(recipe);

    recipe.save(function(err) {
        if(err) {
            console.log(err);
        }
    })
}