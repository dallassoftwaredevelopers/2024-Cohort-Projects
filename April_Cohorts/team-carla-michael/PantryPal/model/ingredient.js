/**@module model/ingredient */
import mongoose from "mongoose";
const Schema = mongoose.Schema;

/**Validator that checks if nutrient numbers are integers
* @param {number} fieldName
*/
const checkInt = function(fieldName) {
    return {
        validator: (value) => Number.isInteger(value),
        message: `${fieldName} must be an integer.`
    }
}

/**Schema object for the Ingredient model.
 * @author Tyler Del Rosario
 * @property name {string} Ingredient Name
 * @property image_url {string} This is unlikely to be implemented.
 * @property calories {string}
 * @property vitamin_A {string}
 * @property vitamin_B {string}
 * @property vitamin_C {string}
 * @property cholesterol {string}
 * @property carbohydrates {string}
 * @property protein {string}
 * @property TBD {string} More nutrients will be added.
 */
const IngredientSchema = new Schema({
    name: {type: String, required: true},
    fdc_id: {type: String, required:true, unique: true},
    image_url: {type: String},
    //fridge_id: {type: Schema.Types.ObjectId, ref:"Fridge", required: true},
    
    nutrients: {
        calories: {type: Number, required: true, validate: checkInt("calories")},
        // vitamin_A: {type: Number, required: true, validate: checkInt("vitamin_A")},
        // vitamin_B: {type: Number, required: true, validate: checkInt("vitamin_B")},
        // vitamin_C: {type: Number, required: true, validate: checkInt("vitamin_C")},
        cholesterol: {type: Number, required: true, validate: checkInt("cholesterol")},
        carbohydrates: {type: Number, required: true, validate: checkInt("carbohydrates")},
        protein: {type: Number, required: true, validate: checkInt("protein")},
        total_fat: {type: Number, required: true, validate: checkInt("total_fat")},
        total_saturated_fats: {type: Number, required: true, validate: checkInt("total_saturated_fat")},
        total_trans_fats: {type: Number, required: true, validate: checkInt("total_trans_fats")},
        total_monosaturated_fats: {type: Number, required: true, validate: checkInt("total_mono_fats")}
    }
});
const Ingredient = mongoose.model("Ingredient", IngredientSchema);
export default Ingredient;