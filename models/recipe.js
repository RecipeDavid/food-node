var mongoose = require('mongoose')
,   Schema = mongoose.Schema;

var recipeSchema = new Schema({
    name: String,
    ingredients: [{
        name: String,
        iconUrl: String,
        measure: {type:String, enum:['grams','ml','cups','tsp','tbsp','unit']},
        amount: Number
    }],
    likes: Number,
    prepTime: Number,
    cookTime: Number,
    servingsMin: Number,
    servingsMax: Number,
    steps: [{
        no: Number,
        text: String,
        imageurl: String
    }],
    preferences: [{type:String, enum:['low_fodmap','low_carb','keto','vegan','vegetarian']}],
    occasion: [{type:String, enum:['breakfast','brunch','lunch','dinner','snack','dessert','christmas','halloween','easter','thanksgiving']}],
    source: String,
    sourceUrl: String,
    submittedBy: String,
    approve: Boolean,
    creationDate: {type:Date, default: Date.now},
    imageUrl: String,

});

module.exports = mongoose.model('Recipe', recipeSchema);