import React, {useState} from 'react';
import './CalorieCounter.css'

const CalorieCounter =  ({calorieCount}) => {
    return (
        <div className='calories'>
            <img src="./images/planner-icons/calories.png" alt="calories"></img> 
            {calorieCount} calories
        </div>
    );
};
export default  CalorieCounter;