import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const MealPrepModal = ({modalData,onClose,isOpen}) => {
  
   
    const [meal, setMeal] = useState('');
    const [day, setDay] = useState('');
    const navigate = useNavigate();
    if (!isOpen) return null;
    const handleMealChange = (e) => {
      setMeal(e.target.value);
    };
  
    const handleDayChange = (e) => {
      setDay(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        //create a meal object
        //check if the selected dy already has a meal,
       
        const mealObj = {
            fridgeId: modalData.fridgeID,
            recipeId: modalData.recipeId,
            recipe_name:modalData.recipe_name,
            mealtimes: meal,
            day: day
        }
        const addmealToFridge = async()=>{
            const url = `/fridge/meal`;
            const response = await axios.post(url, mealObj);
            console.log(response.data);
        }
        
        if(mealObj){
          addmealToFridge().then(() => {
            navigate('/mealPrep');
          });
        } else {
          navigate('/mealPrep');
        }
    }
   
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
        <div className="relative bg-white rounded-lg shadow-lg p-8">
          <button className="absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-900" onClick={onClose}>X</button>
          <div className="modal-content">
            <h2 className="text-2xl font-bold mb-4">Add to MealPrep</h2>
<form className="max-w-md mx-auto p-4 border rounded shadow-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="meal">
          Select Meal
        </label>
        <select
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="meal"
          value={meal}
          onChange={handleMealChange}
        >
          <option value="">Select</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="day">
          Select Day
        </label>
        <select
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="day"
          value={day}
          onChange={handleDayChange}
        >
          <option value="">Select</option>
          <option value="sunday">Sunday</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
        </select>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Add
      </button>
    </form>
          </div>
        </div>
      </div>
    </div>
  )
}
