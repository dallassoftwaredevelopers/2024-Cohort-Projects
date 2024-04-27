import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import React from 'react';
import { NavLink } from "react-router-dom";

function Recipies(props) {
  const fridgeID = props.profile.fridgeID._id;
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [categories,setCategories] = useState([]);

  useEffect(() => {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    fetch(url).then(res=>res.json()).then(data=>{
      console.log(data.categories);
      setCategories(data.categories);
    })
    },[])
    const handleCategory = (category) => {
     // const url = `http://localhost:3001/recipes/category/${category}`;
      const url = `/recipes/category/${category}`;
      console.log("response reached from category end");
      axios
      .get(url)
      .then((response) => {
        console.log("response from server",response.data.length,response.data);
        setRecipes(response.data);
        // console.log(recipes);
      });
    }
    
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search logic here
    console.log("Search term:", searchTerm);
    // Update the recipes state with the search  results using axios
    
    const url = `/recipes/search/${searchTerm}`;
    //got to the recipe controller in backend to get the recipes based on user's search
    axios
      .get(url)
      .then((response) => {
        console.log("response from server",response.data.length,response.data);
        setRecipes(response.data);
        // console.log(recipes);
      });
  };
  return (
    <div className="p-8">
      <section>
        <div className="container">
          {/* create a search bar menu with a search button */}
          <div className="flex  items-center mb-8">
            <h2 className="text-2xl font-bold mx-2">Search for recipes </h2>
            <div>
              <form className="flex space-x-4 mb-3" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-400">
                  Search
                </button>
              </form>
            </div>
          </div>
          {/* create a filter menu with a filter button */}
        </div>
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="flex space-x-4 mb-8 ">
          {/* Placeholder for category cards */}
          {Array.from(categories, (category, index) => (
            <div className="">
            <img src={category.strCategoryThumb} className="cursor-pointer" alt="category image" width={"100px"} onClick={()=>handleCategory(category.strCategory)}/>
            <p className="w-full" key={index}>{category.strCategory}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* Placeholder for recipe cards */}

          {Array.from(recipes, (recipe, index) => (
            <div key={index} className="bg-gray-500 p-4 rounded-lg space-y-2">
              <div className="text-center">
              <NavLink to={`/recipes/${recipe._id}`} >
                <img src={recipe.image} alt="" className="" />
              </NavLink>
             
                <h3 className="text-lg font-semibold">{recipe.name}</h3>
                {/* <span>♥</span> */}
              </div>
              {/* <p># Calories</p>
              <button className="text-indigo-600 hover:text-indigo-800">
                View Ingredients
              </button> */}
              <div className="flex space-x-2">
                {/* Tags */}
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                  {recipe.category}
                </span>
                {/* <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                  TAG 2
                </span> */}
                  </div>
                  <button className="bg-black px-3 py-2 text-white rounded-sm font-semibold" >Add to Meal Plan</button>
       
                  </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Recipies;
