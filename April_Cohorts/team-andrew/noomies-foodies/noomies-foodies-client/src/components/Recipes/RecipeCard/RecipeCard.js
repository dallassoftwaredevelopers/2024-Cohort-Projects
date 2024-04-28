import React from 'react';
import './RecipeCard.css'


const RecipeCard = ({mealTitle, imgUrl, id}) => {    
    return(
        <div className='recipe-small-card' data-id={id}>
            <img className="recipe-img" src={imgUrl} alt="meal"></img>
            <p className='small-card-recipe-title'>{mealTitle}</p>
            
            <button className='options-btn' ><img src="./images/planner-icons/options-small-card.png" alt="options"></img></button>

        </div>

    ); 
};
export default RecipeCard;