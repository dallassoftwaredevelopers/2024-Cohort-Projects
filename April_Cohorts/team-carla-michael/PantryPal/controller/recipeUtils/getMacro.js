import Ingredient from "../../model/ingredient.js"

//function to get the macros of a recipe with the names of the ingredient
export   const gettotalRecipeMacro = async(recipe) => {
    const names=[];
    console.log("reached macro function");
     
    const totalNutrients= {
      calories: 0,
      carbohydrates: 0,
      cholesterol: 0,
      protein: 0,
      total_fat: 0,
      total_saturated_fats: 0,
      total_trans_fats:0,
      total_monosaturated_fats:0
    } 
    console.log("ingredients in macros",recipe.ingredients);
    console.log("recipe.ingredients.entries(",recipe.ingredients.entries());
    for(const [index, id] of recipe.ingredients.entries()){
      const ingredients = await Ingredient.findOne({ _id: id });
      names.push(ingredients.name);
      //get the measurements
      //const convertedNutrients = convertNutrient(ingredients.nutrients,recipe.measurements[index]);
     const convertedNutrients = ingredients.nutrients;
      totalNutrients.calories += Math.floor(convertedNutrients.calories);
      totalNutrients.carbohydrates += Math.floor(convertedNutrients.carbohydrates);
      totalNutrients.cholesterol += Math.floor(convertedNutrients.cholesterol);
      totalNutrients.protein += Math.floor(convertedNutrients.protein);
      totalNutrients.total_fat += Math.floor(convertedNutrients.total_fat);
      totalNutrients.total_saturated_fats += Math.floor(convertedNutrients.total_saturated_fats);
      totalNutrients.total_trans_fats += Math.floor(convertedNutrients.total_trans_fats);
      totalNutrients.total_monosaturated_fats += Math.floor(convertedNutrients.total_monosaturated_fats);
                 
    }
    return {totalNutrients,names};
  }
  //function to get macros* measurement of ingredients in the recipe--- as of now not using this function.
const convertNutrient = (nutrients,measurements) => {
   let [value, unit] = measurements.match(/\d+|\D+/g);
    console.log("before convert",nutrients);
    if (value.includes("/")) {
        const [numerator, denominator] = value.split('/').map(Number);
        value = numerator / denominator;
        value = value.toFixed(2);
    }else{
        value=parseFloat(value);
    }
  
    if(value!==NaN && unit){
     
      let c=1;
      if(value && (unit==="g"||unit==='gram'|| unit ==='grams'||unit ==='gms')){
        c = 1;
      }else if(value && ( unit==="cup"||unit=='Cup')){
        c = 250;
      }else if(value && (unit==="oz"||unit=='Oz'||unit ==='ounce'||unit ==='ounces'||unit =='Ounce')){
        c = 28.3495;
      }else if(value && (unit==="lb"||unit=='Lb'||unit ==='pound'||unit ==='pounds'||unit == 'Pound'||unit=='lbs'|| unit==='Lbs')){
        c = 453.592;
      }else if(value && (unit==="ml"||unit=='Ml'||unit ==='milliliter'||unit ==='milliliters'||unit == 'Milliliter')){
        c = 1;
      }else if(value && (unit==="l"||unit=='L'||unit ==='liter'||unit ==='liters'||unit == 'Liter')){
        c = 1000;
      }else if(value && (unit==="tsp"||unit=='Tsp'||unit ==='teaspoon'||unit ==='teaspoons'||unit == 'Teaspoon')){
        c = 4.92892;
      }else if(value && (unit==="tbsp"||unit=='Tbsp'||unit ==='tablespoon'||unit ==='tablespoons'||unit == 'Tablespoon')){
        c = 14.7868;
      }else{
        c = 1;
        value=1;
      }
      console.log("converted",value,unit);
      nutrients.calories = (nutrients.calories/100) *value*c;
      nutrients.carbohydrates = (nutrients.carbohydrates/100) *value*c;
      nutrients.cholesterol = (nutrients.cholesterol/100) *value*c;
      nutrients.protein = (nutrients.protein/100) *value*c;
      nutrients.total_fat = (nutrients.total_fat/100) *value*c;
      nutrients.total_saturated_fats = (nutrients.total_saturated_fats/100) *value*c;
      nutrients.total_trans_fats = (nutrients.total_trans_fats/100) *value*c;
      nutrients.total_monosaturated_fats = (nutrients.total_monosaturated_fats/100) *value*c;
      console.log(nutrients);
      return nutrients;  
    }else{
        console.log(value,unit);
      nutrients.calories = (nutrients.calories/100);
      nutrients.carbohydrates = (nutrients.carbohydrates/100) ;
      nutrients.cholesterol = (nutrients.cholesterol/100);
      nutrients.protein = (nutrients.protein/100) ;
      nutrients.total_fat = (nutrients.total_fat/100);
      nutrients.total_saturated_fats = (nutrients.total_saturated_fats/100);
      nutrients.total_trans_fats = (nutrients.total_trans_fats/100) ;
      nutrients.total_monosaturated_fats = (nutrients.total_monosaturated_fats/100) ;
      console.log(nutrients);
      return nutrients;
    }
   
  }