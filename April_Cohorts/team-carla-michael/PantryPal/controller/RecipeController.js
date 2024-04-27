import mongoose from "mongoose";
import Recipe from "./../model/recipe.js";
import Ingredient from "./../model/ingredient.js";
import FridgeIngredient from "../model/fridge_ingredient.js";
import "dotenv/config";
import {gettotalRecipeMacro }from "./recipeUtils/getMacro.js"
import{ObjectId} from "mongodb";
import meal from "../model/meal.js";

const apiKey = process.env.API_KEY;

//function to return 10 ingredient based on the name you type in the search bar
export const getIngredient = async (ingredientName) => {
  const ingredientList = [];
  //get the ingredient id from the database
  //get 10 recipes with that ingredient
  //return the recipes
  mongoose.connect(process.env.DB_URL).catch((error) => {
    console.error(error);
  });

  await Ingredient.find({ name: new RegExp(`\\b${ingredientName}\\w*`, "i") }).limit(10)
        .then((res)=>{
          //get the ingredient names
          for(const ingredient of res){
            const obj = {};
            obj[ingredient.name] = ingredient._id;
            obj["name"] = ingredient.name;
            obj["id"] = ingredient._id;
            obj["nutrients"] = ingredient.nutrients;
            ingredientList.push(obj);
          }
          console.log(ingredientList);   
  })
  return ingredientList;
}

//get a recipe based on ingredient/ingredients
export const getRecipesById = async (id) => {
  //let recipeList ;
  mongoose.connect(process.env.DB_URL);
 const recipeList =  await Recipe.find({ ingredients: { $in: [id] } })
  .then((res)=>{
    console.log(res.length);    
    return res;
})
return recipeList;
}
//get recipes based on category
export const getRecipesByCategory = async(category)=>{
  mongoose.connect(process.env.DB_URL);
  const recipeList  = await Recipe.find({category:category})
    .then((response)=>{
        console.log(response.length);
        return response;       
        }).catch((error)=>{ 
            console.log("error when returning recipe results based on category:",error,);
        })
       
  return recipeList;
}

//get recipes based on name
export const getRecipesByName = async(name) => {
    await mongoose.connect(process.env.DB_URL).catch((error) => {
      console.error(error);
      res.status(500).send(error);
  });
  const recipeList = await Recipe.find({name: new RegExp(`\\b${name}\\w*`, "i")})
    .then((response)=>{
        console.log(response.length);
        return response;
        } 
    ).catch((error)=>{
        console.log("error when returning recipe results based on name:", error,);
    } 
    )
    return recipeList;

}
export const getAllIngredientNames = async(list) => {  
  const ingredients = (list.split(","));
  const result=[];
  mongoose.connect(process.env.DB_URL);

  for(const name of ingredients){{
    if(name){
      const ingredientList = await Ingredient.find({name:new RegExp(`\\b${name}\\w*`, "i")})
      .then((res)=>{
        console.log("results ",res.length);
        const names = res.map(el => el.name);
        console.log("names",names);
        // const namesLow = names.map(el => el.toLowerCase());
        //   if(!namesLow.includes(name.toLowerCase())){
        //     names.push(name);
        //    }
           return names;
        
       })
      .catch((error)=>{
          console.log("error when returning ingredient results based on name:", error,);
      }
      );
      result.push(ingredientList);
      }
   console.log(result);
  
    }
    
    }
return result;
}

// Controller method to get a recipe details by its ID
export const getRecipeById = async (id) => {
    try {
        mongoose.connect(process.env.DB_URL);
        const recipe = await Recipe.findById(id);
        //get all the Ingredients by name
        const {totalNutrients,names }=await  gettotalRecipeMacro(recipe);      
        console.log("names",names);
        const recipeWithNames = {
          "_id": recipe._id,
          "name": recipe.name,
          "category": recipe.category,
          "ingredients": names,
          "instructions": recipe.instructions,
          "image": recipe.image,
          "measurements": recipe.measurements,
          "totalNutrients": totalNutrients,
         };
       // console.log( recipe);
   
        console.log(recipeWithNames);
       
       return recipeWithNames;
    } catch (error) {
        console.error("Error fetching recipe by ID:", error);
        throw error;
    }
};

//function to return the recipe based on the users selected ingredients
export const getRecipesByIngredientList = async(list,select)=>{
 const result = await  mongoose.connect(process.env.DB_URL);
 console.log("connected to database",list);
 const ingredientIds = [];
//loop through the list of ingredients
 for(const ingredient of list){
      //get the ingredient id from the database
      const ingredientId = await Ingredient.findOne({ name: new RegExp(`\\b${ingredient}\\w*`, "i") });
       //add the ingredient id to the list
      if(ingredientId){
          ingredientIds.push(ingredientId._id);
      }
  }
  console.log(ingredientIds);
  if (ingredientIds.length === 0) {
    return [];
  }else{
    console.log("true or false",select);
   //returns 20 recipes 
   if(select==="true"){
    console.log("reached if");
    console.log(select);
    const recipes = await Recipe.find({ ingredients: { $all: ingredientIds } }).limit(20);
    console.log(recipes.length);
    return recipes;
   }else{
    console.log("reached else");
    console.log(select);
    const recipes = await Recipe.find({ingredients:{$in: ingredientIds}}).limit(20);
    console.log(recipes.length);
   // mongoose.disconnect();
    console.log("disconnected from database")
    return recipes;
   }  
   //console.log(recipes.length);
  // mongoose.disconnect;
    
  }
}
