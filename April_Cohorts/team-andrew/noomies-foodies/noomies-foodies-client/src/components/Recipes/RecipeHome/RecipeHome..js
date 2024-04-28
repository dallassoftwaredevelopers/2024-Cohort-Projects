import React, { useState } from "react";
import Recipe from "../Recipes";
import RecipesAll from "../RecipesAll/RecipesAll";
import BackBtn from "../BackBtn/BackBtn";
import CreateRecipe from "../CreateRecipe/CreateRecipe";
import './RecipeHome.css'

const RecipeHome = () => {
    const [showBackBtn, setShowBackBtn] = useState(false);
    const [activeComponent, setActiveComponent] = useState('Recipe');
    const [mealTime, setMealTime] = useState('Breakfast');

 

    


    const arrMeals = [
        {
          id: 1,
          mealTitle: "Spaghetti Carbonara",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
          id: 2,
          mealTitle: "Chicken Stir-Fry",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
          id: 3,
          mealTitle: "Vegetable Curry",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
          id: 1,
          mealTitle: "Spaghetti Carbonara",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
          id: 2,
          mealTitle: "Chicken Stir-Fry",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
          id: 3,
          mealTitle: "Vegetable Curry",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
          id: 1,
          mealTitle: "Spaghetti Carbonara",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
          id: 2,
          mealTitle: "Chicken Stir-Fry",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
          id: 3,
          mealTitle: "Vegetable Curry",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
          id: 1,
          mealTitle: "Spaghetti Carbonara",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
          id: 2,
          mealTitle: "Chicken Stir-Fry",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
          id: 3,
          mealTitle: "Vegetable Curry",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        }
        
      ];
    
      const arrMealsSmall = [
        {
          id: 1,
          mealTitle: "Spaghetti Carbonara",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
          id: 2,
          mealTitle: "Chicken Stir-Fry",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
          id: 3,
          mealTitle: "Vegetable Curry",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        }
      ];
      const food =arrMeals;
    

    return (
        <div className="recipe-viewport">
            {/* {showBackBtn ? <BackBtn onClick={backBtnTest} /> : ''} */}

            {activeComponent === 'Recipe' && (
                <Recipe setShowBackBtn={setShowBackBtn} setActiveComponent={setActiveComponent} setMealTime={setMealTime} />
            )}
            {activeComponent === 'RecipesAll' && (
                <RecipesAll food={food} mealTime={mealTime} setShowBackBtn={setShowBackBtn} setActiveComponent={setActiveComponent} />
            )}
            {activeComponent === 'CreateRecipe' && (
              <CreateRecipe setShowBackBtn={setShowBackBtn} setActiveComponent={setActiveComponent} ></CreateRecipe>
            )}
        </div>
    );
};

export default RecipeHome;
