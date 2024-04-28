import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import './RecipeRow.css';

const RecipeRow = ({ arrMeals }) => {
    return (
        <div className="row-recipe-container">
            {arrMeals.map((meal) => (
                <RecipeCard key={meal.id} mealTitle={meal.mealTitle} imgUrl={meal.imgUrl} id={meal.id}></RecipeCard>
            ))}
        </div>
    );
};

export default RecipeRow;
