import React, { useState, useEffect } from 'react';
import DayWeekBtn from "./DayWeekBtn/DayWeekBtn";
import MealsTodayAll from "./MealsTodayAll/MealsTodayAll";
import DayMealCard from './DayMealCard/DayMealCard';
import WeekMealCard from './WeekMealCard/WeekMealCard';
import './Planner.css'

const Planner = () => {
    //todo add async functions to have get request for data. 
    const arrMealsWeek = [
        {
            weekday: "Monday",
            date: "4/1/2024",
            meals: [
                {
                    mealTitle: "High-Protein Scrambled Eggs with Cottage Cheese",
                    mealTime: "Breakfast",
                    calories: 350,
                    time: 40,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    mealTitle: "Grilled Chicken Salad with Avocado",
                    mealTime: "Lunch",
                    calories: 500,
                    time: 30,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    mealTitle: "Spaghetti Squash with Turkey Meatballs",
                    mealTime: "Dinner",
                    calories: 450,
                    time: 10,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                }
            ]
        },
        {
            weekday: "Tuesday",
            date: "4/2/2024",
            meals: [
                {
                    mealTitle: "Oatmeal with Berries",
                    mealTime: "Breakfast",
                    calories: 300,
                    time: 20,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    mealTitle: "Grilled Salmon with Quinoa",
                    mealTime: "Lunch",
                    calories: 550,
                    time: 25,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    mealTitle: "Vegetable Stir-Fry with Tofu",
                    mealTime: "Dinner",
                    calories: 400,
                    time: 200,
                    imgUrl: "./images/planner-icons/sample-recipe.png"   
                }
            ]
        }
        
       
    ];

    const meals =  [
        {
            mealTitle: "Oatmeal with Berries",
            mealTime: "Breakfast",
            calories: 300,
            time: 20,
            imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
            mealTitle: "Grilled Salmon with Quinoa",
            mealTime: "Lunch",
            calories: 550,
            time: 25,
            imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
            mealTitle: "Vegetable Stir-Fry with Tofu",
            mealTime: "Dinner",
            calories: 400,
            time: 200,
            imgUrl: "./images/planner-icons/sample-recipe.png"   
        }
    ]






    const [isDay, setIsDay] = useState(true); 
    // listens to isDay. If changes, changes the component
    useEffect(() => {
        //todo send a fetch request from the api getting all meals for today or week
        // feed that information back to be rendered


    }, [isDay]) //dependency array. Use Effect is called whenever isDay changes



    return (
        <div className='Planner-container'>
            <DayWeekBtn isDay={isDay} setIsDay={setIsDay}></DayWeekBtn>
            {/* renders componenet based on boolean isDay */}
            {/* temp placeholder daymealcard. Will eventually render MealsWeekAll */}
            {isDay ? <MealsTodayAll arrMeals={meals}></MealsTodayAll> : <WeekMealCard arrMealsWeek={arrMealsWeek}></WeekMealCard>}
        </div>
    );
};
export default Planner;