//Users are able to Meal Prep and returns a list of grocerry items that they need to purchase
import axios from 'axios'
import React, { useEffect,useState } from 'react';
import GrocerryList from './GrocerryList.js';
import { FaTrashCan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

export default function  MealPrep(props) {
  //const fridgeId='6620f09f1e7dc4f70c80e1bc';

  const fridgeId = props.profile.fridgeID._id;
  const [meals, setMeals] = useState([]);
  const [macroData, setMacro] = useState([]);
  const [tableData, setTableData] = useState([]);

  const daysOfWeek = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday",];
  const mealTimes = ["Breakfast", "Lunch", "Dinner","Macros"];

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);  
  }

  //function get total macros for a day
  function getmacro (list){
   const macros = list.map(meal => meal.macros);
   const totalMacros = macros.reduce((acc, macro) => {
      acc.calories += macro.calories;
      acc.protein += macro.protein;
      acc.carbohydrates += macro.carbohydrates;
      acc.total_fat += macro.total_fat;
      return acc;
    })
    return totalMacros;
  };

  //function to create mealPrep data
  const createmealPrep = (meals) => {
  const tableData = [];
  const mon_rec= meals.filter(meal=>meal.day ==="monday");
  const tue_rec= meals.filter(meal=>meal.day ==="tuesday");
  const wed_rec= meals.filter(meal=>meal.day ==="wednesday");
  const thu_rec= meals.filter(meal=>meal.day ==="thursday");
  const fri_rec= meals.filter(meal=>meal.day ==="friday");
  const sat_rec= meals.filter(meal=>meal.day ==="saturday");
  const sun_rec= meals.filter(meal=>meal.day ==="sunday");


  tableData.push(mon_rec);
  tableData.push(tue_rec);
  tableData.push(wed_rec);
  tableData.push(thu_rec);
  tableData.push(fri_rec);
  tableData.push(sat_rec);
  tableData.push(sun_rec);
  setTableData(tableData);
  createMacroData(tableData);
};
const createMacroData = (tableData)=>{
  const macroData = [];
  tableData.map(day=>{
    //get macros for a day
    if(day.length>0){
      const macros =getmacro(day);
      macroData.push(macros);
    }  else{
      macroData.push(null);
    }
     
  })
  setMacro(macroData);
  console.log("macroData", macroData);

}
  useEffect(() => {
    const fetchData = async () => {
      const url = '/fridge/meal'
      const response = await axios.get(url,{params:{fridgeId:fridgeId}}).then((res) => {
        createmealPrep(res.data);
        setMeals(res.data);
        console.log(meals, "HERE");
        return res;
      });
  }
  fetchData();
},[])

const deleteMeal = async (meal) => {
  const url= '/fridge/meal/delete';
  const response = await axios.post(url,{mealID:meal._id});
  const data = response.data;
  console.log(data);
  document.location.reload(true);

}


 console.log("macroData",macroData); 
 return (
    <div>
        <div class="bg-gray-100 p-5">
          <div className='flex justify-around mb-4'>
          <h1 class="text-2xl font-bold mb-4">Weekly Meal Schedule</h1>
          <button className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400' onClick={openModal}>Create Grocery list</button>
          </div>
  <GrocerryList isOpen={isOpen} meals={meals} onClose={closeModal} fridgeID={fridgeId} />
   <table className="border-collapse w-full  border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Day</th>
          {mealTimes.map(mealTime => (
            <th key={mealTime} className="border border-gray-300 p-2">{mealTime}</th>
          ))}
        
        </tr>
       
      </thead>
      <tbody>
        {daysOfWeek.map((day, index) => (
          <tr key={day}>
            <td className="border border-gray-300 p-2">{day}</td>
            {mealTimes.map(mealTime => {if(mealTime === "Macros")
              return (
                <td key={mealTime}
                 className="border border-gray-300 p-2 text-sm">
                  {/* {tableData[index] ? tableData[index].filter(meal => meal.mealtimes === mealTime)[0].macros : null} */}
                 <i>Calories</i>: <span className='ml-1'>{macroData[index] ? macroData[index].calories : null}</span><br/>
                 <i>Carbs</i>:<span className='ml-1'> {macroData[index] ? macroData[index].carbohydrates : null} g</span> <br/>
                 <i>Protein</i>: <span className='ml-1'>{macroData[index] ? macroData[index].protein : null} g</span><br/>
                 <i>Fat</i>:<span className='ml-1'> {macroData[index] ? macroData[index].total_fat : null} g</span>
                </td>
              )            
              const meal = tableData[index] ? tableData[index].find(meal => meal.mealtimes === mealTime) : null;
               const name = meal ? meal.recipe_name : null;
                return (
                  
                     <td key={mealTime} className="border  border-gray-300 p-2">  
                     <span className='flex items-center'>
                      <Link to={name? `/recipes/${meal.recipe_id}`:""}>              
                    <span className=" hover:text-blue-300 " title='view details'>                  
                      {name} </span>
                      </Link>
                      {name &&  <FaTrashCan className='ml-2 text-red-500 cursor-pointer' onClick={()=>deleteMeal(meal)} />}
                      
                      </span>
                    </td>
            
               )
               
          
            })}
          
          </tr>
          
        ))}
        
      </tbody>
    </table>
</div>
    </div>
  )
}