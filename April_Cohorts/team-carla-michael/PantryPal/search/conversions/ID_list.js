//Just an array containing the nutrients we need.

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

export default {
    "1079": "fiber",
    "1003": "protein",
    "1063": "total_sugars",
    "1050": "carbohydrates", //ExceptionHandler prioritizes this one when possible.
    "1005": "carbohydrates",
    "1085": "total_fat",
    "1258": "total_saturated_fats",
    "1257": "total_trans_fats",
    "1292": "total_monosaturated_fats",
    "2047": "calories",
    "1253": "cholesterol"
};