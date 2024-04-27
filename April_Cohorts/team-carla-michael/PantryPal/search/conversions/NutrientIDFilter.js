import ExceptionHandler from './ExceptionHandler.js';
import ID_list from './ID_list.js';
//Important nutrient IDs for easy reference.
//1079 - Fiber
//1003 - Protein
//1063 - Total Sugars
//1050 - Carbohydrates summ
//1005 - Carbohydrates diff
//1085 - Total Fat
//1258 - Total Saturated Fats
//1257 - Total trans fats
//1292 - Total Monosaturate Fats
//2047 - Calories(Atwoods)
//1253 - Cholesterol

const FilterNutrientIDs = (nutrient_set) => {

    let important_nutrients = {};

    for (const nutrient of nutrient_set) {
        const ID = String(nutrient["nutrient_id"]);
        let is_important = false;

        for (const important of Object.keys(ID_list)) {
            if (ID === important) {
                is_important = true;
                break;
            }
        }

        if (is_important) {
            //Handle Carbohydrate exceptions.
            const passed = ExceptionHandler(nutrient, String(ID), important_nutrients);
            
            if (passed) {
                important_nutrients[ID_list[nutrient.nutrient_id]] = Math.round(nutrient.amount_100g);
            }
        }
    }

    for (const important of Object.keys(ID_list)) {
        if (important_nutrients[ID_list[important]] === undefined) {
            important_nutrients[ID_list[important]] = 0;
        }
    }

    return important_nutrients;
}

export default FilterNutrientIDs;