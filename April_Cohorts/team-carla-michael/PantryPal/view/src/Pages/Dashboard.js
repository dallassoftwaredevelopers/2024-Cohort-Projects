import { useContext, useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { MealPrepModal } from "../Modals/MealPrepModal";
import { IngredientModal } from "../Modals/IngredientModal";
import { PantryContext } from "./context/PantryContext";

function Dashboard(props) {
  const fridgeID = props.profile.fridgeID._id;

  
  const{handleSubmit,recipes,handleCategory,
        setSearchTerm} = useContext(PantryContext);
 
  const [recipeSelected, setRecipeSelected] = useState("");
  const [IngredientsNeeded, setIngredientneeded] = useState([]);
  const [categories, setCategories] = useState('Seafood');
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [isOpenIng, setIsOpenIng] = useState(false);
  const [pantryList, setPantryList] = useState([]);

  const openModal = (recipeId, recipe_name) => {
    setIsOpen(true);
    setModalData({
      recipeId: recipeId,
      recipe_name: recipe_name,
      fridgeID: fridgeID,
    });
    console.log(modalData);
  };
  console.log("isOpen", isOpen);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModalIng = (id, name, image) => {
    setRecipeSelected(id);
    setIsOpenIng(true);
    setModalData({
      recipeId: id,
      recipe_name: name,
      image
    });
  };
  const closeModalIng = () => {
    setIngredientneeded("");
    setIsOpenIng(false);
  };

  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.categories);
        setCategories(data.categories);
      });
  }, []);
  // const handleCategory = (category) => {
  //   setRecipes([]);
  //   const url = `/recipes/category/${category}`;
  //   axios.get(url).then((response) => {
  //     console.log("response from server", response.data.length, response.data);
  //     setRecipes(response.data);
  //     // console.log(recipes);
  //   });
  // };
  useEffect(() => {
    const fetchrecipe = async () => {
      const url = `/recipes/findById/${recipeSelected}`;
      const response = await axios.get(url);
      const data = await response.data.ingredients;
      console.log("from recipe", data);
      //get pantry items
      const iNeed = data.filter((item) => !pantryList.includes(item));
      const iHave = pantryList.filter((item) => data.includes(item));
      setIngredientneeded([iHave, iNeed]);
    };
    if (recipeSelected) {
      fetchrecipe();
    }
  }, [recipeSelected]);
  //PANTRY HOOK FOR "MY INGREDIENTS"
  useEffect(() => {
    const fetchPantry = async () => {
      const endpoint = "/fridge/ingredient?fridgeID=" + fridgeID;

      const res = await fetch(endpoint).catch((error) => {
        console.error(error);
      });
      const data = await res.json();
      const list = data.map((item) => item.name);
      console.log(list);
      setPantryList(list);
    };

    fetchPantry();
  }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Perform search logic here
  //   console.log("Search term:", searchTerm);
  //   // Update the recipes state with the search  results using axios
  //   if (!searchTerm) {
  //     alert("Please enter a search term");
  //     return;
  //   } else {
  //     const url = `/recipes/search/${searchTerm}`;
  //     //got to the recipe controller in backend to get the recipes based on user's search
  //     axios.get(url).then((response) => {
  //       console.log(
  //         "response from server",
  //         response.data.length,
  //         response.data
  //       );
  //       setRecipes(response.data);
  //       // console.log(recipes);
  //     });
  //   }
  // };

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="p-8 mx-auto max-w-7xl">
      <section>
        <h2 className="text-2xl font-bold mb-6 animate-fade">Categories</h2>
        <div className="flex space-x-4 mb-8 flex-wrap">

          {/* Placeholder for category cards */}
          {Array.from(categories, (category, index) => (
            <div className="  rounded-full text-center p-2">
              <img
                src={category.strCategoryThumb}
                className={`cursor-pointer animate-fade`}
                alt="category image"
                width={"100px"}
                onClick={() => handleCategory(category.strCategory)}
              />
              <p className="w-full" key={index}>
                {category.strCategory}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 flex justify-between items-center animate-fade">
          <span>My Recipes</span>
          <form class="ms-auto w-1/3" autocomplete="off" onSubmit={handleSubmit}>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only white:text-dark"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
                type="Search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {/* Placeholder for recipe cards */}

          {Array.from(recipes, (recipe, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-green-800 dark:border-gray-700 animate-fade-down animate-delay-100"
            >
              <NavLink to={`/recipes/${recipe._id}`}>
                <img src={recipe.image} alt="" className="rounded-t-lg" />
              </NavLink>
              <div className="text-start flex flex-col gap-y-3 items-start p-5">
                <h3 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white truncate">
                  {truncateString(recipe.name, 20)}
                </h3>

                <button
                  className="text-indigo-300 hover:text-indigo-800"
                  onClick={() =>
                    openModalIng(recipe._id, recipe.name, recipe.image)
                  }
                >
                  View Ingredients
                </button>
                <div className="flex space-x-2 justify-start">
                  {/* Tags */}
                  <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                    {recipe.category}
                  </span>
                  {/* <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                  TAG 2
                </span> */}
                </div>
              </div>
              <button
                className="bg-black px-3 py-2 text-white rounded-sm font-semibold w-full"
                onClick={() => openModal(recipe._id, recipe.name)}
              >
                Add to Meal Plan
              </button>
            </div>
          ))}

          <MealPrepModal
            isOpen={isOpen}
            modalData={modalData}
            onClose={closeModal}
          />
          <IngredientModal
            isOpen={isOpenIng}
            onClose={closeModalIng}
            IngredientsNeeded={IngredientsNeeded}
            modalData={modalData}
          />
        </div>
      </section>
    </div>
  );
}
export default Dashboard;