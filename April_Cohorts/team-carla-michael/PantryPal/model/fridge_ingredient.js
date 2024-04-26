import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const FridgeIngredient = new Schema({
    fridgeID: {type: Schema.Types.ObjectId, ref:"Fridge"},
    ingredientID: {type: Schema.Types.ObjectId, ref:"Ingredient"},
    measurement: {
        type:String,
        enum: ['ounce', 'cup', 'pound', 'tablespoon',""],
        default: "ounce"
    },
    amount: {type: Number}
});

export default mongoose.model("FridgeIngredient", FridgeIngredient);