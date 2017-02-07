var mongoose = require('mongoose')
,   Schema = mongoose.Schema;

var ingredientSchema = new Schema({
    name: String, // Find a way to ensure that the _id = name
    fats: Number,
    carbs: Number,
    protein: Number,
    calories: Number,
    sugar: Number,
    units: String
});

module.exports = mongoose.model('Ingredient', ingredientSchema);