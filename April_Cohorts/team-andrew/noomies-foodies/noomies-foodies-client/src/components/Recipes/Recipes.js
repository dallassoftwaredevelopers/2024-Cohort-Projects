import React from 'react';
import './Recipes.css'
import RecipeBtn from "./RecipeBtn/RecipeBtn"
import RecipeRow from './RecipeRow/RecipeRow';
import EmptyCard from './EmptyCard/EmptyCard';


const Recipe = ({breakfast, lunch, dinner, other, setShowBackBtn, setActiveComponent, setMealTime}) => {
    setShowBackBtn(false); // Hide the back button when Component1 is rendered

    const handleViewAllClick = () => {
        setShowBackBtn(true);
        setActiveComponent('RecipesAll');
    };
    const handleBreakfast = () => {
        setShowBackBtn(true);
        setMealTime('Breakfast');
        setActiveComponent('RecipesAll')
    }

    const handleLunch = () => {
        setShowBackBtn(true);
        setMealTime('Lunch');
        setActiveComponent('RecipesAll')
    }
    const handleDinner = () => {
        setShowBackBtn(true);
        setMealTime('Dinner');
        setActiveComponent('RecipesAll')
    }
    const handleSnack = () => {
        setShowBackBtn(true);
        setMealTime('Snack');
        setActiveComponent('RecipesAll')
    }


    const handleAddRecipe = () => {
        setShowBackBtn(true);
        setActiveComponent('CreateRecipe');
    }


    return(
        <div className='recipe-container'>
            <div className='recipe-header'>
                <div className='top-add-btn'>
                    <RecipeBtn imgUrl={'./images/recipes-icon/plus.png'} onClick={handleAddRecipe} content={'Add Recipe'} ></RecipeBtn>
                </div>
                
                <h1 className='recipe-title'>My Recipes</h1>
            </div>
            <div className='recipe-time' >
                <div className='recipe-category-title'>
                    <p>Breakfast:</p>
                    <button className="breakfast-btn view-all" onClick={handleBreakfast}>View All</button>
                </div>
                {breakfast ? (
                    <RecipeRow arrMeals={breakfast} />
                ) : (
                    <div className="no-recipe-container">
                        <div className='empty-card-container'><EmptyCard/></div>
                        
                        <RecipeBtn imgUrl={'./images/recipes-icon/plus.png'} onClick={handleAddRecipe} content={'Add Recipe'} ></RecipeBtn>
                    </div>
                )}

                {/* <RecipeRow arrMeals={breakfast}></RecipeRow> */}
            </div >
            <div className='recipe-time' >
                <div className='recipe-category-title'>
                    <p>Lunch:</p>
                    <button className="lunch-btn view-all" onClick={handleLunch}>View All</button>
                </div>
                {lunch ? (
                    <RecipeRow arrMeals={lunch} />
                ) : (
                    <div className="no-recipe-container">
                        <div className='empty-card-container'><EmptyCard/></div>
                        
                        <RecipeBtn imgUrl={'./images/recipes-icon/plus.png'} onClick={handleAddRecipe} content={'Add Recipe'} ></RecipeBtn>
                    </div>
                )}
            </div >
            <div className='recipe-time' >
                <div className='recipe-category-title'>
                    <p>Dinner:</p>
                    <button className="dinner-btn view-all" onClick={handleDinner}>View All</button>
                </div>
                {dinner ? (
                    <RecipeRow arrMeals={dinner} />
                ) : (
                    <div className="no-recipe-container">
                        <div className='empty-card-container'><EmptyCard/></div>
                        
                        <RecipeBtn imgUrl={'./images/recipes-icon/plus.png'} onClick={handleAddRecipe} content={'Add Recipe'} ></RecipeBtn>
                    </div>
                )}
            </div >
            <div className='recipe-time' >
                <div className='recipe-category-title'>
                    <p>Snacks/Other:</p>
                    <button className='other-btn view-all' onClick={handleSnack}>View All </button>
                </div>
                {other ? (
                    <RecipeRow arrMeals={other} />
                ) : (
                    <div className="no-recipe-container">
                        <div className='empty-card-container'><EmptyCard/></div>
                        
                        <RecipeBtn imgUrl={'./images/recipes-icon/plus.png'} onClick={handleAddRecipe} content={'Add Recipe'} ></RecipeBtn>
                    </div>
                )}
            </div >
                
        </div>

    ); 
};
export default Recipe;