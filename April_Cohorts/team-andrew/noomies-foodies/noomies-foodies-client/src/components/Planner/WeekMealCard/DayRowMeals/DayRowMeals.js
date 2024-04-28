import React from "react";
import MealCardSmall from "../../MealCardSmall/MealCardSmall";
import CalorieCounter from "../../CalorieCounter/CalorieCounter";
import TotalCookingTime from "../../TotalCookingTime/TotalCookingTime"
import './DayRowMeals.css';

const DayRowMeals = ({weekday, date, arrMeals}) => {

    const caloriesPerDay = arrMeals.reduce((total, meal) => total + meal.calories, 0);
    const timePerDay = (arrMeals.reduce((total, meal) => total + meal.time, 0)) /60;
    let roundedTime = Math.floor(timePerDay);
    if ((timePerDay - roundedTime) > .05) {
        roundedTime += .1;
    }


    return(
        <div className="row-meal-info-container">
            <div className="day-meal-info">
                <div className="date">{weekday}: {date}</div>
                <div className="calorie-container"><CalorieCounter calorieCount={caloriesPerDay}></CalorieCounter></div>
                <div className="time-container"><TotalCookingTime time={(roundedTime).toFixed(1)}></TotalCookingTime></div>
            </div>

            <div className="meal-container">
                {arrMeals.map((meal) => (
                    <MealCardSmall mealTitle={meal.mealTitle} mealTime={meal.mealTime} calories={meal.calories} imgUrl={meal.imgUrl}></MealCardSmall>
                 ))}


            </div>

        </div>
        
        
    );
};
export default DayRowMeals;
