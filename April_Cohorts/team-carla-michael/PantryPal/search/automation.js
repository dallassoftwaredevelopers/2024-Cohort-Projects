
import createRecipe from "../controller/recipeUtils/createNewRecipe.js";
 const addRecipesToDb =async()=>{
    const alp='abcdefghijklmnopqrstuvwxyz';
    for (const c of alp){
        const data = await getRecipeByName(c).then(
            (response) => {
                console.log(response.length, "elemts to added to database")
                            })      
    }
}
export const getRecipeByName = async (name) => {  
    //const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    //const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`;
    const response = await fetch(url);
    const res = await response.json();
    if (res.meals === null) {
      return [];
    } else {
     createRecipe(res.meals);//this is a method to create a recipe if you have a list of recipe response
      return res.meals;
    }
};
addRecipesToDb();