import React, { useState } from 'react';
import CalorieCounter from '../CalorieCounter/CalorieCounter';
import './MealCardSmall.css'

const MealCardSmall = ({mealTitle, mealTime, calories, imgUrl }) => {    
    return(
        <div className='meal-small-card'>
            <h3 className='meal-time-week'>{mealTime}</h3>
            <img className="meal-small-img" src={imgUrl} alt="meal"></img>
            <p className='small-card-meal-title'>{mealTitle}</p>
            <div className='calorie-wrapper'>
                <CalorieCounter calorieCount={calories}></CalorieCounter>
            </div>
            <button className='options-btn' ><img src="./images/planner-icons/options-small-card.png" alt="options"></img></button>

        </div>

    ); 
};
export default MealCardSmall;