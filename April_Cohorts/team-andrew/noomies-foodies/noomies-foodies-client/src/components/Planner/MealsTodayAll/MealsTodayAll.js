import React, { useState } from 'react';
import CalorieCounter from '../CalorieCounter/CalorieCounter';
import TotalCookingTime from '../TotalCookingTime/TotalCookingTime';
import DayMealCard from '../DayMealCard/DayMealCard';
import './MealsTodayAll.css'

const MealsTodayAll = ({ arrMeals }) => {
    let totalTime = 0;
    // sum up calories
    const totalCalories = arrMeals.reduce((total, current) => {
        totalTime = current.cookTime + totalTime;
        return total + current.calories; // Accumulate the calories of each meal
    }, 0);
    
    totalTime = totalTime / 60;
    // round up or down the amount of time to 1 decimal place
    let roundedTime = Math.floor(totalTime);
    if ((totalTime - roundedTime) > .05) {
        roundedTime += .1;
    }

    
    return (
        <div className='meals-today-all'>
            <div className='day-meal-summary'>
                <h1>Meals</h1>
                <div className='calorie-summary'>
                    <CalorieCounter calorieCount={totalCalories}></CalorieCounter>
                </div>
                <div className='time-summary'>
                    <TotalCookingTime time={roundedTime}></TotalCookingTime>
                </div>
            </div>
            <div className='day-meal-container'>
                {arrMeals.map((meal, index) => {
                    return (
                        <div className='day-meal-item' key={index}>
                            <DayMealCard
                                mealTitle={meal.mealTitle}
                                mealTime={meal.mealTime}
                                calories={meal.calories}
                                cookTime={meal.cookTime}
                                imgUrl={meal.imgUrl}
                                prepTime={meal.prepTime}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MealsTodayAll;
