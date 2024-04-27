/**@module model/meal*/
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**Schema object for Meal moddel
 * @author Tyler Del Rosario
 * @property owner_id {ObjectID} An ObjectID that references a user in user document.
 * @property recipe_id {ObjectID} An ObjectID that references a recipe in recipe document.
 * @property date {Date} A date that points to a specific day that the meal is tied to.
 */
const MealSchema = new Schema({
    fridge_id: {type: Schema.Types.ObjectId, ref:"Fridge", required: true},
    recipe_id: {type: Schema.Types.ObjectId, ref:"Recipe", required: true},
    recipe_name: {type: String, required: true},
    day: {
        type: String,
        enum: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
        default: "monday"
    },
    mealtimes:{
        type: String,
        enum: ["Breakfast", "Lunch", "Dinner","Extra"],
        default: "Extra"
    },
    macros: {
        calories: {type: Number, required: true},
        cholesterol: {type: Number, required: true},
        carbohydrates: {type: Number, required: true},
        protein: {type: Number, required: true},
        total_fat: {type: Number, required: true},
        total_saturated_fats: {type: Number, required: true},
        total_trans_fats: {type: Number, required: true},
        total_monosaturated_fats: {type: Number, required: true}
    },
    ingredients:[{type:String,required: true}]

});

export default mongoose.model("Meal", MealSchema);;