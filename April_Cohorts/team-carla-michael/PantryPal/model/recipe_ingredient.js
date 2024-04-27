import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RecipeIngredientSchema = new Schema({
    recipe_id: {type:Schema.Types.ObjectId, ref:"Recipe"},
    ingredient_id: {type:Schema.Types.ObjectId, ref:"Ingredient"},
    measurement: {
        type: String,
        enum: ['ounce', 'cup', 'pound', 'tablespoon'],
        default: 'ounce',
        required: true
    },
    amount: {type:Number, required: true},
    description: {type: String, required: true}
});

export default mongoose.model("RecipeIngredient", RecipeIngredientSchema);