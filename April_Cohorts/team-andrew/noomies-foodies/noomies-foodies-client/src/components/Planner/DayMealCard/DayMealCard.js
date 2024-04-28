import React, { useState } from 'react';
import CalorieCounter from '../CalorieCounter/CalorieCounter';
import  './DayMealCard.css';

//Todo update with meal card with correct meal object properties later
const DayMealCard = ({mealTime, mealTitle, prepTime, cookTime, calories, imgUrl}) => {


    //todo
    // when user clicks options btn, will open up options page
    const displayCardOptions = () => {

    };


    return (
        <div className='day-card'>
            <div className='card-left'>
                <p className='meal-time'>{mealTime}</p>
                <img className='today-recipe-img' src={imgUrl}></img>
                
            </div>
            <div className='card-right'>
                <div className='card-right-top'>
                    <p className='meal-name'>{mealTitle}</p>

                </div>
                <div className='card-right-bottom'>
                    <div className='card-info'>Prep Time: {prepTime} minutes</div>
                    <div className='card-info'><CalorieCounter calorieCount={calories}></CalorieCounter></div>
                    <div className='card-info'>Cook Time: {cookTime} minutes</div>
                </div>

                <button className='options-btn' onClick={displayCardOptions}><img src="./images/planner-icons/options.png" alt="options"></img></button>

                
                
            </div>
            <div className='card-right-background'>
                    {/* <button className='options-btn' onClick={displayCardOptions}><img src="./images/planner-icons/options.png" alt="options"></img></button> */}
            </div>


        </div>

    );
};
export default DayMealCard;