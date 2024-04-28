import React from "react";
import DayRowMeals from "./DayRowMeals/DayRowMeals";
import './DayRowMeals.css';

const WeekMealCard = ({arrMealsWeek}) => {

    // arrMealsWeek will be an array of objects
    // each object will represent a day 
    // each object will have a weekday, date and array of meals


    //  arrMealsWeek = [
    //     {
    //         weekday: "Monday",
    //         date: "4/1/2024",
    //         meals: [
    //             {
    //                 mealTitle: "High-Protein Scrambled Eggs with Cottage Cheese",
    //                 mealTime: "Breakfast",
    //                 calories: 350,
    //                 time: 40,
    //                 imgUrl: "./images/planner-icons/sample-recipe.png"
    //             },
    //             {
    //                 mealTitle: "Grilled Chicken Salad with Avocado",
    //                 mealTime: "Lunch",
    //                 calories: 500,
    //                 time: 30,
    //                 imgUrl: "./images/planner-icons/sample-recipe.png"
    //             },
    //             {
    //                 mealTitle: "Spaghetti Squash with Turkey Meatballs",
    //                 mealTime: "Dinner",
    //                 calories: 450,
    //                 time: 10,
    //                 imgUrl: "./images/planner-icons/sample-recipe.png"
    //             }
    //         ]
    //     },
    //     {
    //         weekday: "Tuesday",
    //         date: "4/2/2024",
    //         meals: [
    //             {
    //                 mealTitle: "Oatmeal with Berries",
    //                 mealTime: "Breakfast",
    //                 calories: 300,
    //                 time: 20,
    //                 imgUrl: "./images/planner-icons/sample-recipe.png"
    //             },
    //             {
    //                 mealTitle: "Grilled Salmon with Quinoa",
    //                 mealTime: "Lunch",
    //                 calories: 550,
    //                 time: 25,
    //                 imgUrl: "./images/planner-icons/sample-recipe.png"
    //             },
    //             {
    //                 mealTitle: "Vegetable Stir-Fry with Tofu",
    //                 mealTime: "Dinner",
    //                 calories: 400,
    //                 time: 200,
    //                 imgUrl: "./images/planner-icons/sample-recipe.png"   
    //             }
    //         ]
    //     }
        
       
    // ];
    return (
    <div className="week-meals-container">
        <h1 className="week-container-heading">Meals</h1>
        { arrMealsWeek.map((meal) => (
            <DayRowMeals weekday={meal.weekday} date={meal.date} arrMeals={meal.meals}></DayRowMeals>
        ))};
    </div>
    );
};
export default WeekMealCard;