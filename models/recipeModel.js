const mongoose = require("mongoose")

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Le titre est requis"],
        match: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9'’\-() ]{3,100}$/
    },
    ingredient: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"ingredient",
        required: [true, "Les ingredients sont requis"],
    }],
    instruction: {
        type: String,
        required: [true, "Les instructions sont requises"],
        match: /^[^<>]{2,1000}$/
,
        trim:true
    },
    preparationTime: {
        type: String,
        required: [true, "Le temps de preparation est requis"],
        match:/^(\s*\d{1,2}\s?(h|heures?|heure|min|minutes?))(\s\d{1,2})?(\s?(min|minutes?))?$/,
        trim:true
    },
    cookingTime: {
        type: String,
        required: [true, "Le temps de cuisson est requis"],
        match: /^(\s*\d{1,2}\s?(h|heures?|heure|min|minutes?))(\s\d{1,2})?(\s?(min|minutes?))?$/,
        trim:true
    },
    difficulty: {
        type: String,
        required: [true, "La difficulté est requise"],
        enum: {
            values: ["facile", "moyen", "difficile"],
            message: "La difficulté doit être soit 'facile', 'moyen' ou 'difficile'",
            trim:true
        }
    },
    category:{
        type: String,
        required:[true,"La catégorie est requise"],
        enum:{
            values:["entrée","plat principal","dessert","autres"],
            message:"La catégorie doit être soit 'entrée','plat principal','dessert','autres'",
            trim:true
        }
    },

})

const recipeModel= mongoose.model("recipes",recipeSchema)
module.exports=recipeModel