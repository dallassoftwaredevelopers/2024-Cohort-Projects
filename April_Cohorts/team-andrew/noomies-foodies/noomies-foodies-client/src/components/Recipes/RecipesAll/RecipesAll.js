import React from 'react';
import RecipeBtn from "../RecipeBtn/RecipeBtn"
import RecipeRow from '../RecipeRow/RecipeRow';
import BackBtn from '../BackBtn/BackBtn';
import './RecipesAll.css'


const RecipesAll = ({food, mealTime, setShowBackBtn, setActiveComponent  }) => { 
    const handleBackBtnClick = () => {
        setShowBackBtn(false); // Hide the back button
        setActiveComponent('Recipe'); // Switch back to Recipe component
    };

    const handleAddRecipe = () => {
        setShowBackBtn(true);
        setActiveComponent('CreateRecipe');
    }

    return(
        <div className='recipe-container-all'>
            <BackBtn onBackButtonClick={handleBackBtnClick}></BackBtn>

            <div className='recipe-header'>
                <div className='top-add-btn'>
                <RecipeBtn imgUrl={'./images/recipes-icon/plus.png'} onClick={handleAddRecipe} content={'Add Recipe'} ></RecipeBtn>
                </div>
                
                <h1 className='recipe-title'>My Recipes <span className='meal-period'><img className='play-icon' src='./images/recipes-icon/play-btn.png' alt='play-btn' ></img> {mealTime}</span></h1>
            </div>

                <RecipeRow arrMeals={food}></RecipeRow>
        
        </div>
    );
}
    export default RecipesAll;
    